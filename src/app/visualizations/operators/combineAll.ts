import { Component } from '@angular/core';

import { timer, interval, Subject } from 'rxjs';
import { tap, take, map, combineAll } from 'rxjs/operators';

@Component({
  selector: 'rx-combine-all',
  template: `
    <h1>combineAll</h1>
    <p>I don't understand this operator yet.</p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="outer"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="inner"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="combined"></rxjs-visualize-marble>
  `,
})
export class RxCombineAllComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  outer = timer(0, 1000).pipe(take(20));
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
