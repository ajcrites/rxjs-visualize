import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { switchMap, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-switch-map',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Switch Map</h2>
    <marble [source$]="firstOrder$"></marble>
  `,
})
export class RxSwitchMapComponent {
  initTime = new Date().getTime();
  lowerOrders = [];
  higherOrder$ = interval(2000).pipe(
    take(4),
    map(val => String.fromCharCode(val + 97)),
  );
  firstOrder$ = this.higherOrder$.pipe(
    switchMap(val => {
      const lowerOrder = interval(1000).pipe(
        take(4),
        map(innerVal => val + innerVal),
      );
      this.lowerOrders.push(lowerOrder);
      return lowerOrder;
    }),
  );
}
