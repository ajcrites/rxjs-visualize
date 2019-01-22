import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'rx-do',
  template: `
    <h1>Do / Tap</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxDoComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  // The lettable operator version of `do` is `tap`
  input = interval(1000).pipe(take(20));
  // tslint:disable-next-line:no-console
  output = this.input.pipe(tap(val => console.log(val)));
}
