import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { expand, skip, map, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'rx-expand',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Expand</h2>
    <marble [source$]="expanded$"></marble>
  `,
})
export class RxExpandComponent {
  initTime = new Date().getTime();
  lowerOrders = [];
  higherOrder$ = interval(500).pipe(skip(3), take(3));
  expanded$ = this.higherOrder$.pipe(
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
