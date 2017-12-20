import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { take, map, concatMap } from 'rxjs/operators';

@Component({
  selector: 'rx-concat-map',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Concat Map</h2>
    <marble [source$]="firstOrder$"></marble>
  `,
})
export class RxConcatMapComponent {
  initTime = new Date().getTime();
  lowerOrders = [];
  higherOrder$ = interval(1000).pipe(
    take(4),
    map(val => String.fromCharCode(val + 97)),
  );
  firstOrder$ = this.higherOrder$.pipe(
    concatMap(val => {
      const lowerOrder = interval(1000).pipe(
        take(4),
        map(innerVal => val + innerVal),
      );
      this.lowerOrders.push(lowerOrder);
      return lowerOrder;
    }),
  );
}
