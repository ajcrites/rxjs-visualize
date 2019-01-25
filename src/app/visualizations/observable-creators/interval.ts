import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'rx-interval',
  template: `
    <h1>interval</h1>
    <p>
      The prince of Observable creators as far as RxJS Visualize is concerned.
    </p>
    <p>
      This functions like <code>setInterval</code> except it's an Observable
      that emits for the given period rather than calling a callback. Note the
      delay on the initial emission and compare to
      <a routerLink="/timer"><code>timer</code></a
      >.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="test"></marble>
  `,
})
export class RxIntervalComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  test = interval(1000).pipe(take(20));
}
