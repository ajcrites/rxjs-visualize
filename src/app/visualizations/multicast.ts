import { Component } from '@angular/core';

import { interval, from, Subject, ConnectableObservable } from 'rxjs';
import { multicast, take, map, tap } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-multicast',
  template: `
    <h1>Multicast</h1>
    <p>
      This creates a <code>ConnectableObservable</code>. When connected (via)
      <code>connect</code>, it emits a Subject with the provided factory
      function. This allows you to subscribe to share subscriptions to the
      Subject multiple times.
    </p>
    <p>
      Using <code prism-highlight="typescript">from(this.input)</code> instead
      would result in multiple emissions from the source and we would see
      <code>Connecting!</code> logged for each.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="multi"></marble>
    <marble [source]="outputa"></marble> <marble [source]="outputb"></marble>
  `,
})
export class RxMulticastComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(1000).pipe(
    take(3),
    tap(val => {
      if (val === 1) {
        // tslint:disable:no-console -- this will be logged twice since the
        // visualization component also subscribes to input
        console.log('Connecting!');
        // tslint:enable
        this.multi.connect();
      }
    }),
  );
  multi = this.input.pipe(
    multicast(() => new Subject()),
  ) as ConnectableObservable<number>;
  outputa = from(this.multi).pipe(map((val: number) => val + 3));
  outputb = from(this.multi).pipe(mapNumberToChar());
}
