import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, filter, timeoutWith } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-timeout-with',
  template: `
    <h1>timeoutWith</h1>
    <p>
      <code>timeout</code> that allows you to specify a fallback Observable
      instead of just throwing an error.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="mappedInput"></marble>
    <marble [source]="checkFive"></marble> <marble [source]="output"></marble>
  `,
})
export class RxTimeoutWithComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(1000).pipe(take(20));
  mappedInput = this.input.pipe(mapNumberToChar());
  checkFive = this.input.pipe(filter(val => val > 5));
  output = this.checkFive.pipe(timeoutWith(3000, this.mappedInput));
}
