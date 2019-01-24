// It's unclear to me why one of the emissions is skipped
import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { retryWhen, take, map, mapTo } from 'rxjs/operators';

@Component({
  selector: 'rx-retry-when',
  template: `
    <h1>retryWhen</h1>
    <p>
      I think that the retry Observable is supposed to be based on the error
      Observable, so this example can be improved.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="retry" color="yellow"></marble>
    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxRetryWhenComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  retry = interval(4000).pipe(
    take(2),
    mapTo('r'),
  );
  input = interval(1000).pipe(
    map(val => {
      if (2 === val) {
        throw new Error();
      }
      return val + 1;
    }),
  );
  output = this.input.pipe(retryWhen(() => this.retry));
}
