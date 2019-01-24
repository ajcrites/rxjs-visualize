import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { expand, skip, map, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'rx-expand',
  template: `
    <h1>Expand</h1>
    <p>This visualization is broken</p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="higherOrder"></marble>
    <marble
      *ngFor="let source of lowerOrders"
      [initTime]="initTime"
      [source]="source"
    ></marble>
    <marble [source]="expanded"></marble>
  `,
})
export class RxExpandComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  initTime = new Date().getTime();
  lowerOrders = [];
  higherOrder = interval(500).pipe(
    skip(3),
    take(3),
  );
  expanded = this.higherOrder.pipe(
    expand(val => {
      const lowerOrder = interval(500).pipe(
        skip(3),
        map(innerVal => val * innerVal),
        take(3),
      );
      this.lowerOrders.push(lowerOrder);
      return lowerOrder;
    }),
    takeWhile(x => x < this.lowerOrders.length),
  );
}
