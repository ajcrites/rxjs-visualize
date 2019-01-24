import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, filter } from 'rxjs/operators';

@Component({
  selector: 'rx-filter',
  template: `
    <h1>Filter</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxFilterComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(take(20));
  output = this.input.pipe(filter(val => !!(val % 2)));
}
