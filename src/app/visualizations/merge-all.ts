import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeAll';

@Component({
  selector: 'rx-merge-all',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Merge All</h2>
    <marble [source$]="firstOrder$"></marble>
  `
})
export class RxMergeAllComponent {
  initTime = (new Date).getTime();
  lowerOrders = [];
  higherOrder$ = Observable.interval(1000).take(4).map(val => String.fromCharCode(val + 97));
  firstOrder$ = this.higherOrder$.map(val => {
    const lowerOrder = Observable.interval(1000).take(4).map(innerVal => val + innerVal);
    this.lowerOrders.push(lowerOrder);
    return lowerOrder;
  }).mergeAll();
}

