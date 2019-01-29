import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, filter } from 'rxjs/operators';

@Component({
  selector: 'rx-filter',
  template: `
    <h1>filter</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxFilterComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(20));
  output = this.input.pipe(filter(val => !!(val % 2)));
}
