import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/exhaustMap';

@Component({
  selector: 'rx-exhaust-map',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Exhaust</h2>
    <marble [source$]="firstOrder$"></marble>
  `
})
export class RxExhaustMapComponent {
  initTime = (new Date).getTime();
  lowerOrders = [];
  higherOrder$ = Observable.interval(1000).take(18);
  firstOrder$ = this.higherOrder$.exhaustMap(val => {
    const lowerOrder = Observable.interval(1000).take(3).map(innerVal => String.fromCharCode(Math.floor(val / 2) * 3 + innerVal + 97));
    this.lowerOrders.push(lowerOrder);
    return lowerOrder;
  });
}



