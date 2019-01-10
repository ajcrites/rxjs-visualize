import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-exhaust-map',
  template: `
    <marble [source]="higherOrder"></marble>
    <marble
      *ngFor="let source of lowerOrders"
      [initTime]="initTime"
      [source]="source"
    ></marble>
    <h2>Exhaust</h2>
    <marble [source]="firstOrder"></marble>
  `,
})
export class RxExhaustMapComponent {
  initTime = new Date().getTime();
  lowerOrders = [];
  higherOrder = interval(1000).pipe(take(18));
  firstOrder = this.higherOrder.pipe(
    exhaustMap(val => {
      const lowerOrder = interval(1000).pipe(
        take(3),
        map(innerVal =>
          String.fromCharCode(Math.floor(val / 2) * 3 + innerVal + 97),
        ),
      );
      this.lowerOrders.push(lowerOrder);
      return lowerOrder;
    }),
  );
}
