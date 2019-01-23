import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, findIndex } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-find-index',
  template: `
    <h1>Find Index</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxFindIndexComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(1000).pipe(
    take(5),
    mapNumberToChar(),
  );
  output = this.input.pipe(findIndex(val => val.charCodeAt(0) > 98));
}
