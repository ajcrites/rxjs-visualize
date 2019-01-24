import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { single, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-single',
  template: `
    <h1>single</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxSingleComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
    take(3),
    mapNumberToChar(),
  );
  output = this.input.pipe(single(val => val === 'b'));
}
