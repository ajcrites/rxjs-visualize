import { Component } from '@angular/core';

import { defer, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'rx-defer',
  template: `
    <h1>defer</h1>
    <p>
      This visualization can be improved to show more of what
      <code>defer</code> can do. Right now it's exactly the same as just using
      <code>timer</code> by itself.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble *ngFor="let input of inputs" [source]="input"></marble>
    <marble [source]="output"></marble>
  `,
})
export class RxDeferComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  output = defer(() => timer(0, 1000)).pipe(take(20));
}
