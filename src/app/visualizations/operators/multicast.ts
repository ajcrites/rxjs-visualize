import { Component } from '@angular/core';

import { from, timer, Subject, ConnectableObservable } from 'rxjs';
import { multicast, take, map, tap, mergeMapTo } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-multicast',
  template: `
    <h1>multicast</h1>
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

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="multi"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="outputa"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="outputb"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="delayedOutput"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="lateOutput"></rxjs-visualize-marble>
  `,
})
export class RxMulticastComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    take(4),
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
  // previously emitted values are not replayed
  delayedOutput = timer(2500).pipe(mergeMapTo(this.multi));
  // not shown ... sort of. This never emits because multicast does not handle
  // resubscriptions and `multi` will have already completed at this point.
  lateOutput = timer(6500).pipe(mergeMapTo(this.multi));
}
