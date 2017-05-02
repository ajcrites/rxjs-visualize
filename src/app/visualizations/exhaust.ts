import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/exhaust';

@Component({
  selector: 'rx-exhaust',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Exhaust</h2>
    <marble [source$]="firstOrder$"></marble>
  `
})
export class RxExhaustComponent {
  charNum = 97;
  initTime = (new Date).getTime();
  lowerOrders = [];
  higherOrder$ = Observable.interval(1000).take(18);
  firstOrder$ = this.higherOrder$.map(val => {
    if (val % 2) {
      const lowerOrder = Observable.interval(1000).take(3).map(innerVal => String.fromCharCode(Math.floor(val / 2) * 3 + innerVal + 97));
      this.charNum++;
      this.lowerOrders.push(lowerOrder);
      return lowerOrder;
    }
    return Observable.empty();
  }).exhaust();
}


