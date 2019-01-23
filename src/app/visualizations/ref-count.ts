import { Component } from '@angular/core';

import { interval, timer } from 'rxjs';
import { take, publish, refCount, mergeMapTo } from 'rxjs/operators';

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

    <marble [source]="input"></marble> <marble [source]="outputa"></marble>
    <marble [source]="outputb"></marble>
  `,
})
export class RxRefCountComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(1000).pipe(take(20));
  subject = this.input.pipe(
    publish(),
    refCount(),
  );
  outputa = this.subject.pipe(take(2));
  outputb = timer(3000).pipe(mergeMapTo(this.subject));
}
