/**
 * FIXME need to figure out a good way to represent this since the mapTo
 * Observable is lost while chaining
 */

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concatMapTo';

@Component({
  selector: 'rx-concat-map-to',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Concat Map</h2>
    <marble [source$]="firstOrder$"></marble>
  `
})
export class RxConcatMapToComponent {
  initTime = (new Date).getTime();
  lowerOrders = [];
  higherOrder$ = Observable.interval(1000).take(4).map(val => String.fromCharCode(val + 97));
  firstOrder$ = this.higherOrder$.map(val => {
    this.lowerOrders.push(Oberv
  }).concatMapTo(Observable.interval(1000).take(4));

  createInnerObservable() {
    const innerObservable = Observable.interval(1000).take(4);
    this.lowerOrders.push(innerObservable);

    return innerObservable;
  }
}
