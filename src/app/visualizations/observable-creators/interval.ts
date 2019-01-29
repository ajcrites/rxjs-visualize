import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'rx-interval',
  template: `
    <h1>interval</h1>
    <p>
      This functions like <code>setInterval</code> except it's an Observable
      that emits for the given period rather than calling a callback. Note the
      delay on the initial emission and compare to
      <a routerLink="/timer"><code>timer</code></a
      >.
    </p>
    <p>
      I originally used this Observable creator to help with a lot of the
      visualizations, but there is always an initial delay of the period when
      using <code>interval</code> whereas you can control the initial delay
      separately from the period when using <code>timer</code> which allows the
      visualizations to start more quickly.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="test"></marble>
  `,
})
export class RxIntervalComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  test = interval(1000).pipe(take(20));
}
