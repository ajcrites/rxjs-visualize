import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, map, pluck } from 'rxjs/operators';

@Component({
  selector: 'rx-pluck',
  template: `
    <h1>Pluck</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="display"></marble> <marble [source]="output"></marble>
  `,
})
export class RxPluckComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  values = [1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4, 4, 3, 1, 1, 2];
  input = interval(1000).pipe(
    map(key => ({ key: this.values[key] })),
    take(this.values.length),
  );
  // These funciton identically
  display = this.input.pipe(map(val => val.key));
  output = this.input.pipe(pluck('key'));
}
