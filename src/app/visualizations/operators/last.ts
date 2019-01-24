import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, last } from 'rxjs/operators';

@Component({
  selector: 'rx-last',
  template: `
    <h1>Last</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="last"></marble>
  `,
})
export class RxLastComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(take(3));
  last = this.input.pipe(last());
}
