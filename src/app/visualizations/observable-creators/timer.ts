import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'rx-timer',
  template: `
    <h1>timer</h1>
    <p>
      The prince of Observable creators as far as RxJS Visualize is concerned.
    </p>
    <p>
      Similar to <code>interval</code> except that you can provide an initial
      delay as the first argument and the period as the second. If no period is
      provided, <code>timer</code> will emit only once.
    </p>
    <p>
      If the initial delay is 0, <code>timer</code> will emit immediately and
      subsequent emissions will be emitted according to the provided period of
      time. This is behind the magic of a lot of the visualizations.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="once"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="interval"></rxjs-visualize-marble>
  `,
})
export class RxTimerComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  once = timer(3000);
  interval = timer(0, 1000).pipe(take(5));
}
