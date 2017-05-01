import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concatAll';

@Component({
  selector: 'rx-concat-all',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [source$]="source$"></marble>
    <h2>Concat All</h2>
    <marble [source$]="firstOrder$"></marble>
  `
})
export class RxConcatAllComponent {
  lowerOrders = [];
  higherOrder$ = Observable.interval(1000).take(4).map(val => String.fromCharCode(val + 97));
  firstOrder$ = this.higherOrder$.map(val => {
    const lowerOrder = Observable.interval(1000).take(4).map(innerVal => val + innerVal);
    this.lowerOrders.push(lowerOrder);
    return lowerOrder;
  }).concatAll();
}

