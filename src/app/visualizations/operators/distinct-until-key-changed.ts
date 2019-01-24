import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { distinctUntilKeyChanged, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-distinct-until-key-changed',
  template: `
    <h1>Distinct Until Key Changed</h1>
    <p>
      Works like <code>distinctUntilChanged</code> except for objects. You
      provide a key to compare between objects.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="display"></marble> <marble [source]="distinct"></marble>
  `,
})
export class RxDistinctUntilKeyChangedComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  values = [1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4, 4, 3, 1, 1, 2];
  input = interval(1000).pipe(
    map(key => ({ key: this.values[key] })),
    take(this.values.length),
  );
  // This is fed from the input Observable and is the first diagram below
  display = this.input.pipe(map(val => val.key));
  distinct = this.input.pipe(
    distinctUntilKeyChanged('key'),
    map(val => val.key),
  );
}
