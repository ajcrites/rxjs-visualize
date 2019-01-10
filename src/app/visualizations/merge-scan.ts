import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { mergeScan, skip, take, map } from 'rxjs/operators';

@Component({
  selector: 'rx-merge-scan',
  template: `
    <marble [source]="higherOrder"></marble>
    <marble
      *ngFor="let source of lowerOrders"
      [initTime]="initTime"
      [source]="source"
    ></marble>
    <h2>Merge Scan</h2>
    <marble [source]="firstOrder"></marble>
  `,
})
export class RxMergeScanComponent {
  // I don't fully understand this one yet; will revisit after `scan`
  initTime = new Date().getTime();
  lowerOrders = [];
  higherOrder = interval(1000).pipe(
    take(3),
    skip(1),
  );
  firstOrder = this.higherOrder.pipe(
    mergeScan((acc, val) => {
      const lowerOrder = interval(1000 * val).pipe(
        take(3),
        map(innerVal => acc + innerVal),
      );
      this.lowerOrders.push(lowerOrder);
      return lowerOrder;
    }, 1),
  );
}
