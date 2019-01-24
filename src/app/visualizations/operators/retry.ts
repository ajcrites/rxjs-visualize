import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Component({
  selector: 'rx-retry',
  template: `
    <h1>retry</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxRetryComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
    map(val => {
      if (3 === val) {
        throw new Error();
      }
      return val + 1;
    }),
  );
  output = this.input.pipe(retry(2));
}
