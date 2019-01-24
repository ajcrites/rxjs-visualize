import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-take',
  template: `
    <h1>take</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxTakeComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
    mapNumberToChar(),
    take(4),
  );
  output = this.input.pipe(take(2));
}
