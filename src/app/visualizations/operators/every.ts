import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { every, mapTo, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-every',
  template: `
    <h1>Every</h1>
    <p>
      This checks that every element in an Observable matches some predicate. If
      <code>every</code> fails, it will emit <code>false</code> immediately and
      complete. Otherwise you have to wait until the source completes to see if
      it passed.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="passEvery"></marble>
    <marble [source]="failEvery"></marble> <marble [source]="passed"></marble>
    <marble [source]="failed"></marble>
  `,
})
export class RxEveryComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  passEvery = interval(1000).pipe(
    take(5),
    mapTo('a'),
  );
  failEvery = interval(1000).pipe(
    take(5),
    map(val => (val % 2 ? 'b' : 'a')),
  );
  passed = this.passEvery.pipe(
    every(val => 'a' === val),
    map(val => (val ? 1 : 0)),
  );
  failed = this.failEvery.pipe(
    every(val => 'a' === val),
    map(val => (val ? 1 : 0)),
  );
}
