// It's unclear to me why one of the emissions is skipped
import { Component } from '@angular/core';

import { interval, timer } from 'rxjs';
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

    <rxjs-visualize-marble
      [source]="retry"
      color="yellow"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxRetryWhenComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  retry = interval(4000).pipe(
    take(2),
    mapTo('r'),
  );
  input = timer(0, 1000).pipe(
    map(val => {
      if (2 === val) {
        throw new Error();
      }
      return val + 1;
    }),
  );
  output = this.input.pipe(retryWhen(() => this.retry));
}
