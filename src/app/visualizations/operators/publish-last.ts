import { Component } from '@angular/core';

import { ConnectableObservable, interval } from 'rxjs';
import { tap, take, mapTo, publishLast } from 'rxjs/operators';

@Component({
  selector: 'rx-publish-last',
  template: `
    <h1>Publish Last</h1>
    <p>
      This is similar to <code>publish</code> except it emits only the last
      value of the source Observables.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxPublishLastComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
    take(5),
    tap(val => {
      if (0 === val) {
        this.output.connect();
      }
    }),
  );
  output = this.input.pipe(
    mapTo('p'),
    publishLast(),
  ) as ConnectableObservable<number>;
}
