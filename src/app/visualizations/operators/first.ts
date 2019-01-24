import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, first } from 'rxjs/operators';

@Component({
  selector: 'rx-first',
  template: `
    <h1>first</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxFirstComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(take(3));
  output = this.input.pipe(first());
}
