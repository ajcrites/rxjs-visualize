import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { mergeMap, map, take } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-merge-map',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Merge Map</h2>
    <marble [source$]="firstOrder$"></marble>
  `,
})
export class RxMergeMapComponent {
  initTime = new Date().getTime();
  lowerOrders = [];
  higherOrder$ = interval(1000).pipe(take(4), mapNumberToChar());
  firstOrder$ = this.higherOrder$.pipe(
    mergeMap(val => {
      const lowerOrder = interval(1000).pipe(
        take(4),
        map(innerVal => val + innerVal),
      );
      this.lowerOrders.push(lowerOrder);
      return lowerOrder;
    }),
  );
}
