import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concatMap';

@Component({
  selector: 'rx-concat-map',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Concat Map</h2>
    <marble [source$]="firstOrder$"></marble>
  `
})
export class RxConcatMapComponent {
  initTime = (new Date).getTime();
  lowerOrders = [];
  higherOrder$ = Observable.interval(1000).take(4).map(val => String.fromCharCode(val + 97));
  firstOrder$ = this.higherOrder$.concatMap(val => {
    const lowerOrder = Observable.interval(1000).take(4).map(innerVal => val + innerVal);
    this.lowerOrders.push(lowerOrder);
    return lowerOrder;
  });
}


