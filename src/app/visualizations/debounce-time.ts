import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, mergeMap, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rx-debounce-time',
  template: `
    <h1>Debounce</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="debounced"></marble>
  `,
})
export class RxDebounceTimeComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  // This is essentially the same as `debounce`, with `interval`.
  input = interval(2000).pipe(
    mergeMap(val =>
      interval(250).pipe(
        map(innerVal => val + innerVal),
        take(3),
      ),
    ),
    take(20),
  );
  debounced = this.input.pipe(debounceTime(1000));
}
