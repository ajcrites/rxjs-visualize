import { Component } from '@angular/core';

import { interval, from, timer } from 'rxjs';
import { take, tap, share, map, mergeMapTo } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-share',
  template: `
    <h1>share</h1>
    <p>
      As the docs state, this is like using
      <code prism-highlight="typescript">
        source.pipe(multicast(() => new Subject()), refCount());
      </code>
      which effectively connects the source Observable, but allows multiple
      subscriptions to the subject without resubscribing to the source.
    </p>
    <p>
      This example is similar to
      <a routerLink="/multicast"><code>multicast</code></a> except that it
      subscribes immediately and handles resubscriptions.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="subject"></marble>
    <marble [source]="outputa"></marble> <marble [source]="outputb"></marble>
    <marble [source]="delayedOutput"></marble>
    <marble [source]="lateOutput"></marble>
  `,
})
export class RxShareComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
    take(4),
    // tslint:disable-next-line:no-console ... open your console!
    tap(val => val === 0 && console.log('Connecting automatically!')),
  );
  subject = this.input.pipe(share());
  outputa = from(this.subject).pipe(map(val => val + 3));
  outputb = from(this.subject).pipe(mapNumberToChar());
  // previously emitted values are not replayed
  delayedOutput = timer(3500).pipe(mergeMapTo(this.subject));
  // this resubscribes, so it starts over
  lateOutput = timer(5500).pipe(mergeMapTo(this.subject));
}
