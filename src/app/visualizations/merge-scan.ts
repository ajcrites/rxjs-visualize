import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/mergeScan';

// I don't fully understand this one yet; will revisit after `scan`
@Component({
  selector: 'rx-merge-scan',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Merge Scan</h2>
    <marble [source$]="firstOrder$"></marble>
  `
})
export class RxMergeScanComponent {
  initTime = (new Date).getTime();
  lowerOrders = [];
  higherOrder$ = Observable.interval(1000).take(3).skip(1);
  firstOrder$ = this.higherOrder$.mergeScan((acc, val) => {
    const lowerOrder = Observable.interval(1000 * val).take(3).map(innerVal => acc + innerVal);
    this.lowerOrders.push(lowerOrder);
    return lowerOrder;
  }, 1);
}


