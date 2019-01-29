import { Component } from '@angular/core';

import { timer, interval } from 'rxjs';
import { take, map, concatAll } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-concat-all',
  template: `
    <h1>concatAll</h1>
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
export class RxConcatAllComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  initTime = new Date().getTime();
  lowerOrders = [];
  higherOrder = timer(0, 1000).pipe(
    take(4),
    mapNumberToChar(),
  );
  firstOrder = this.higherOrder.pipe(
    map(val => {
      const lowerOrder = interval(1000).pipe(
        take(4),
        map(innerVal => val + innerVal),
      );
      this.lowerOrders.push(lowerOrder);
      return lowerOrder;
    }),
    concatAll(),
  );
}
