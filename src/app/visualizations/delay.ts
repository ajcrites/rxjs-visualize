import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Component({
  selector: 'rx-delay',
  template: `
    <h1>Delay</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="delayed"></marble>
  `,
})
export class RxDelayComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(1000).pipe(take(20));
  delayed = this.input.pipe(delay(1000));
}
