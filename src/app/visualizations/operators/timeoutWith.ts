import { Component } from '@angular/core';

import { timer } from 'rxjs';
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

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="mappedInput"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="checkFive"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxTimeoutWithComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(20));
  mappedInput = this.input.pipe(mapNumberToChar());
  checkFive = this.input.pipe(filter(val => val > 5));
  output = this.checkFive.pipe(timeoutWith(3000, this.mappedInput));
}
