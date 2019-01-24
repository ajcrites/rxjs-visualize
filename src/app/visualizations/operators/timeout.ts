import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, filter, timeout } from 'rxjs/operators';

@Component({
  selector: 'rx-timeout',
  template: `
    <h1>timeout</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="checkFive"></marble>
    <marble [source]="output"></marble>
  `,
})
export class RxTimeoutComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(1000).pipe(take(20));
  checkFive = this.input.pipe(filter(val => val > 5));
  output = this.checkFive.pipe(timeout(3000));
}
