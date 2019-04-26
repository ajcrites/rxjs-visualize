import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, mergeScan, skip, take } from 'rxjs/operators';

@Component({
  selector: 'rx-merge-scan',
  template: `
    <h1>mergeScan</h1>
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
export class RxMergeScanComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  // I don't fully understand this one yet; will revisit after `scan`
  initTime = new Date().getTime();
  lowerOrders: Observable<number>[] = [];
  higherOrder = timer(0, 1000).pipe(
    take(3),
    skip(1),
  );
  firstOrder = this.higherOrder.pipe(
    mergeScan((acc, val) => {
      const lowerOrder = timer(0, 1000 * val).pipe(
        take(3),
        map(innerVal => acc + innerVal),
      );
      this.lowerOrders.push(lowerOrder);
      return lowerOrder;
    }, 1),
  );
}
