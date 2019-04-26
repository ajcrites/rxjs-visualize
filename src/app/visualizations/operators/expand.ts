import { Component } from '@angular/core';

import { timer, Observable } from 'rxjs';
import { expand, skip, map, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'rx-expand',
  template: `
    <h1>expand</h1>
    <p>This visualization is broken</p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="higherOrder"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      *ngFor="let source of lowerOrders"
      [initTime]="initTime"
      [source]="source"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="expanded"></rxjs-visualize-marble>
  `,
})
export class RxExpandComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  initTime = new Date().getTime();
  lowerOrders: Observable<number>[] = [];
  higherOrder = timer(0, 500).pipe(
    skip(3),
    take(3),
  );
  expanded = this.higherOrder.pipe(
    expand(val => {
      const lowerOrder = timer(0, 500).pipe(
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
