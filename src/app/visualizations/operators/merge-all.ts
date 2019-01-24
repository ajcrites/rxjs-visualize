import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { mergeAll, take, map } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-merge-all',
  template: `
    <h1>Merge All</h1>
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
export class RxMergeAllComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  initTime = new Date().getTime();
  lowerOrders = [];
  higherOrder = interval(1000).pipe(
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
    mergeAll(),
  );
}