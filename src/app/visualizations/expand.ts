import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/expand';

@Component({
  selector: 'rx-expand',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Expand</h2>
    <marble [source$]="expanded$"></marble>
  `
})
export class RxExpandComponent {
  initTime = (new Date).getTime();
  lowerOrders = [];
  higherOrder$ = Observable.interval(500).skip(3).take(3);
  expanded$ = this.higherOrder$.expand(val => {
    const lowerOrder = Observable.interval(500).skip(3).map(innerVal => val * innerVal).take(3);
    this.lowerOrders.push(lowerOrder);
    return lowerOrder;
  }).takeWhile(x => x < this.lowerOrders.length);
}
