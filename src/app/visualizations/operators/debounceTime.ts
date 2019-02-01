import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, mergeMap, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rx-debounce-time',
  template: `
    <h1>debounceTime</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="debounced"></rxjs-visualize-marble>
  `,
})
export class RxDebounceTimeComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  // This is essentially the same as `debounce`, with `timer`.
  input = timer(0, 2000).pipe(
    mergeMap(val =>
      timer(0, 250).pipe(
        map(innerVal => val + innerVal),
        take(3),
      ),
    ),
    take(20),
  );
  debounced = this.input.pipe(debounceTime(1000));
}
