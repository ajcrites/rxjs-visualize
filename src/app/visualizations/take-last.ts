import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { takeLast, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-take-last',
  template: `
    <h1>Take Last</h1>
    <p>This will emit the taken values simultaneously.</p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxTakeLastComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(1000).pipe(
    mapNumberToChar(),
    take(4),
  );
  output = this.input.pipe(takeLast(2));
}
