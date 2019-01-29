import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, max } from 'rxjs/operators';

@Component({
  selector: 'rx-max',
  template: `
    <h1>max</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxMaxComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(3));
  output = this.input.pipe(max());
}
