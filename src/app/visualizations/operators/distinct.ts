import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { distinct, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-distinct',
  template: `
    <h1>distinct</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="distinct"></marble>
  `,
})
export class RxDistinctComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
    map(val => (val % 2 ? val : 0)),
    take(20),
  );
  distinct = this.input.pipe(distinct());
}
