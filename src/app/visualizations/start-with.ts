import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { startWith, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-start-with',
  template: `
    <h1>Start With</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxStartWithComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(1000).pipe(
    take(3),
    mapNumberToChar(),
  );
  output = this.input.pipe(startWith('s'));
}
