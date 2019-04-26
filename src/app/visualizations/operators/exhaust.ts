import { Component } from '@angular/core';

import { timer, EMPTY, Observable } from 'rxjs';
import { exhaust, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-exhaust',
  template: `
    <h1>exhaust</h1>
    <p>
      This waits for any previous lower order Observable to complete before
      subscribing to the next Observable. It will not subscribe to any
      Observable that has started emitting; it must wait until a new lower order
      Observable starts emitting.
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
export class RxExhaustComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  initTime = new Date().getTime();
  higherOrder = timer(0, 1000).pipe(take(18));
  // One is created for every two emissions of higherOrder for a total of 9.
  lowerOrders: Observable<string>[] = [];
  firstOrder = this.higherOrder.pipe(
    map(val => {
      if (val % 2) {
        const lowerOrder = timer(0, 1000).pipe(
          take(3),
          map(innerVal =>
            String.fromCharCode(Math.floor(val / 2) * 3 + innerVal + 97),
          ),
        );
        this.lowerOrders.push(lowerOrder);
        return lowerOrder;
      }
      return EMPTY;
    }),
    exhaust(),
  );
}
