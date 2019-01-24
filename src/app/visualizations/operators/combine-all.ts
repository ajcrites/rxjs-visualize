import { Component } from '@angular/core';

import { Subject, interval } from 'rxjs';
import { tap, take, map, combineAll } from 'rxjs/operators';

@Component({
  selector: 'rx-combine-all',
  template: `
    <h1>Combine All</h1>
    <p>I don't understand this operator yet.</p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="outer"></marble> <marble [source]="inner"></marble>
    <marble [source]="combined"></marble>
  `,
})
export class RxCombineAllComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  outer = interval(1000).pipe(take(20));
  inner = new Subject();
  combined = this.outer.pipe(
    map(() =>
      interval(2000).pipe(
        take(3),
        tap(value => this.inner.next(value)),
      ),
    ),
    take(4),
    combineAll(),
  );
}
