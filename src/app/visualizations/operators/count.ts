import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, count } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-count',
  template: `
    <h1>Count</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="count"></marble>
  `,
})
export class RxCountComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
    take(5),
    mapNumberToChar(),
  );
  count = this.input.pipe(count());
}
