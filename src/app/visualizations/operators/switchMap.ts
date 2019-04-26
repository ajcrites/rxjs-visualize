import { Component } from '@angular/core';

import { Observable, timer } from 'rxjs';
import { switchMap, map, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-switch-map',
  template: `
    <h1>switchMap</h1>
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
export class RxSwitchMapComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  initTime = new Date().getTime();
  lowerOrders: Observable<string>[] = [];
  higherOrder = timer(0, 2000).pipe(
    take(4),
    mapNumberToChar(),
  );
  firstOrder = this.higherOrder.pipe(
    switchMap(val => {
      const lowerOrder = timer(0, 1000).pipe(
        take(4),
        map(innerVal => val + innerVal),
      );
      this.lowerOrders.push(lowerOrder);
      return lowerOrder;
    }),
  );
}
