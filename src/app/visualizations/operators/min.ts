import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, map, min } from 'rxjs/operators';

@Component({
  selector: 'rx-min',
  template: `
    <h1>min</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="min"></marble>
  `,
})
export class RxMinComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  values = [1, -1, 2, 4, 0];
  input = timer(0, 1000).pipe(
    map(val => this.values[val]),
    take(this.values.length),
  );
  min = this.input.pipe(min());
}
