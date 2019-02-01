import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { switchAll, map, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-switch-all',
  template: `
    <h1>switchAll (formerly <code>.switch</code>)</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="higherOrder"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      *ngFor="let source of lowerOrders"
      [initTime]="initTime"
      [source]="source"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="firstOrder"></rxjs-visualize-marble>
  `,
})
export class RxSwitchAllComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  initTime = new Date().getTime();
  higherOrder = timer(0, 2000).pipe(
    take(4),
    mapNumberToChar(),
  );
  // Four of these are created, one each second, and displayed below the
  // higher order Observable and above the resulting first order Observable.
  lowerOrders = [];
  firstOrder = this.higherOrder.pipe(
    map(val => {
      const lowerOrder = timer(0, 1000).pipe(
        take(4),
        map(innerVal => val + innerVal),
      );
      this.lowerOrders.push(lowerOrder);
      return lowerOrder;
    }),
    switchAll(),
  );
}
