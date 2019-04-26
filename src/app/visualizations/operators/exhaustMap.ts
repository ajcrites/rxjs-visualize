import { Component } from '@angular/core';

import { Observable, timer } from 'rxjs';
import { exhaustMap, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-exhaust-map',
  template: `
    <h1>exhaustMap</h1>
    <p>
      This example is functionally the same as <code>concatMap</code>. It can
      potentially be improved to show how it's different which I think would
      involve using an externally-created Observable.
    </p>
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
export class RxExhaustMapComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  initTime = new Date().getTime();
  higherOrder = timer(0, 1000).pipe(take(18));
  lowerOrders: Observable<string>[] = [];
  firstOrder = this.higherOrder.pipe(
    exhaustMap(val => {
      const lowerOrder = timer(0, 1000).pipe(
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
