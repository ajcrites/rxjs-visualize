import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { switchMap, map, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-switch-map',
  template: `
    <h1>Switch Map</h1>
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
export class RxSwitchMapComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  initTime = new Date().getTime();
  lowerOrders = [];
  higherOrder = interval(2000).pipe(
    take(4),
    mapNumberToChar(),
  );
  firstOrder = this.higherOrder.pipe(
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
