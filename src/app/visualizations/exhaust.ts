import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { empty } from 'rxjs/observable/empty';
import { exhaust, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-exhaust',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble *ngFor="let source$ of lowerOrders" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Exhaust</h2>
    <marble [source$]="firstOrder$"></marble>
  `,
})
export class RxExhaustComponent {
  initTime = new Date().getTime();
  lowerOrders = [];
  higherOrder$ = interval(1000).pipe(take(18));
  firstOrder$ = this.higherOrder$.pipe(
    map(val => {
      if (val % 2) {
        const lowerOrder = interval(1000).pipe(
          take(3),
          map(innerVal =>
            String.fromCharCode(Math.floor(val / 2) * 3 + innerVal + 97),
          ),
        );
        this.lowerOrders.push(lowerOrder);
        return lowerOrder;
      }
      return empty();
    }),
    exhaust(),
  );
}
