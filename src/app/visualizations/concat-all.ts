import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { take, map, concatAll } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-concat-all',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Concat All</h2>
    <marble [source$]="firstOrder$"></marble>
  `,
})
export class RxConcatAllComponent {
  iitTime = new Date().getTime();
  lowerOrders = [];
  higherOrder$ = interval(1000).pipe(take(4), mapNumberToChar());
  firstOrder$ = this.higherOrder$.pipe(
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
