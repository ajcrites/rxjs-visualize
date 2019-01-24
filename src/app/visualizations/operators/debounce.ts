import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, mergeMap, map, debounce } from 'rxjs/operators';

@Component({
  selector: 'rx-debounce',
  template: `
    <h1>debounce</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="debounced"></marble>
  `,
})
export class RxDebounceComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  // Debounce timer starts over when a value is emitted
  // Emit multiple values, but then do not emit another value until after 1 second
  // Debounce catches the last value in this set as well as the final value
  // Essentially, the difference has to be between the final inner emission (at
  // 750ms) and the next outer observable emission (at 2s, more than a 1s
  // difference)
  input = interval(2000).pipe(
    mergeMap(val =>
      interval(250).pipe(
        map(innerVal => val + innerVal),
        take(3),
      ),
    ),
    take(20),
  );
  debounced = this.input.pipe(debounce(() => interval(1000)));
}
