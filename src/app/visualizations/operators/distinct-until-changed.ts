import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { distinctUntilChanged, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-distinct-until-changed',
  template: `
    <h1>Distinct Until Changed</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="distinct"></marble>
  `,
})
export class RxDistinctUntilChangedComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  values = [1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4, 4, 3, 1, 1, 2];
  input = interval(1000).pipe(
    map(val => this.values[val]),
    take(this.values.length),
  );
  distinct = this.input.pipe(distinctUntilChanged());
}
