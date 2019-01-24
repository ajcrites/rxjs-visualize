import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, ignoreElements } from 'rxjs/operators';

@Component({
  selector: 'rx-ignore-elements',
  template: `
    <h1>ignoreElements</h1>
    <p>
      Might be hard to notice, but the output Observable will emit nothing. It
      will complete when the input Observable completes, so you can react to a
      source completing without emitting anything.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxIgnoreElementsComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(take(5));
  output = this.input.pipe(ignoreElements());
}
