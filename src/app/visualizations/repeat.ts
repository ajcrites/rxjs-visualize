import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, repeat } from 'rxjs/operators';

@Component({
  selector: 'rx-repeat',
  template: `
    <h1>Repeat</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxRepeatComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(1000).pipe(take(3));
  output = this.input.pipe(repeat(3));
}
