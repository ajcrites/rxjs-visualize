import { timer, interval, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { take, map, concatMap } from 'rxjs/operators';
import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-concat-map',
  template: `
    <h1>concatMap</h1>
    <p>
      This visualization differs from <code>concatAll</code> because each lower
      order Observable has to wait for the previous Observable to complete
      before it is created (the <code>concatMap</code> callback is run again).
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
export class RxConcatMapComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  initTime = new Date().getTime();
  higherOrder = timer(0, 1000).pipe(
    take(4),
    mapNumberToChar(),
  );
  // Four of these are created, one each second, and displayed below the
  // higher order Observable and above the resulting first order Observable.
  lowerOrders: Observable<string>[] = [];
  firstOrder = this.higherOrder.pipe(
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
