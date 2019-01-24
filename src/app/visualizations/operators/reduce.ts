import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, reduce } from 'rxjs/operators';

@Component({
  selector: 'rx-reduce',
  template: `
    <h1>reduce</h1>
    <p>
      This is similar to <code>scan</code>, but it waits until the source
      completes before emitting.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxReduceComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(take(5));
  output = this.input.pipe(reduce((acc, curr) => acc + curr, 1));
}
