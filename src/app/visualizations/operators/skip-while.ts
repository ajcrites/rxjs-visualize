import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators';

@Component({
  selector: 'rx-skip-while',
  template: `
    <h1>Skip While</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxSkipWhileComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(take(6));
  output = this.input.pipe(skipWhile(val => val !== 3));
}
