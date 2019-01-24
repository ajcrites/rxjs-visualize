import { Component } from '@angular/core';

import { interval, timer } from 'rxjs';
import { take, publish, refCount, tap, mergeMapTo } from 'rxjs/operators';

@Component({
  selector: 'rx-ref-count',
  template: `
    <h1>Ref Count</h1>
    <p>
      This operator has a bit of a funny name. It essentially connects a
      <code>ConnectableObservable</code> as an operator and also allows for
      resubscriptions to the source.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
    <marble [source]="delayedOutput"></marble>
    <marble [source]="resubscriber"></marble>
  `,
})
export class RxRefCountComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
    // tslint:disable-next-line:no-console ... open your console!
    tap(val => val === 0 && console.log('Subscribed!')),
    take(20),
  );
  subject = this.input.pipe(
    publish(),
    refCount(),
  );
  output = this.subject.pipe(take(2));
  // `refCount` has not dropped to 0, so values are not replayed
  delayedOutput = timer(1000).pipe(
    mergeMapTo(this.subject),
    take(1),
  );
  // `refCount` is 0, so this will resubscribe to the source and start over
  resubscriber = timer(3000).pipe(mergeMapTo(this.subject));
}
