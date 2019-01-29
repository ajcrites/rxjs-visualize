import { Component } from '@angular/core';

import { timer, EMPTY } from 'rxjs';
import { exhaust, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-exhaust',
  template: `
    <h1>exhaust</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="higherOrder"></marble>
    <marble
      *ngFor="let source of lowerOrders"
      [initTime]="initTime"
      [source]="source"
    ></marble>
    <marble [source]="firstOrder"></marble>
  `,
})
export class RxExhaustComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  initTime = new Date().getTime();
  lowerOrders = [];
  higherOrder = timer(0, 1000).pipe(take(18));
  firstOrder = this.higherOrder.pipe(
    map(val => {
      if (val % 2) {
        const lowerOrder = timer(0, 1000).pipe(
          take(3),
          map(innerVal =>
            String.fromCharCode(Math.floor(val / 2) * 3 + innerVal + 97),
          ),
        );
        this.lowerOrders.push(lowerOrder);
        return lowerOrder;
      }
      return EMPTY;
    }),
    exhaust(),
  );
}
