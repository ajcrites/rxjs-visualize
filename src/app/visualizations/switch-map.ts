import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rx-switch-map',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Switch Map</h2>
    <marble [source$]="firstOrder$"></marble>
  `
})
export class RxSwitchMapComponent {
  initTime = (new Date).getTime();
  lowerOrders = [];
  higherOrder$ = Observable.interval(2000).take(4).map(val => String.fromCharCode(val + 97));
  firstOrder$ = this.higherOrder$.switchMap(val => {
    const lowerOrder = Observable.interval(1000).take(4).map(innerVal => val + innerVal);
    this.lowerOrders.push(lowerOrder);
    return lowerOrder;
  });
}

