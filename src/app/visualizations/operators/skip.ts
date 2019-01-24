import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { skip, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-skip',
  template: `
    <h1>Skip</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxSkipComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
    take(5),
    mapNumberToChar(),
  );
  output = this.input.pipe(skip(3));
}
