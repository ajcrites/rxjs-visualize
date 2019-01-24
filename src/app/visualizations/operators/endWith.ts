import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { endWith, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-end-with',
  template: `
    <h1>endWith</h1>
    <p>
      In case you can't see it, the <code>endWith</code> value is emitted at the
      same time as the last value when the Observable completes.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxEndWithComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
    take(3),
    mapNumberToChar(),
  );
  output = this.input.pipe(endWith('s'));
}
