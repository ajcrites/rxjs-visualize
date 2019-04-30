import { Component } from '@angular/core';
import { timer } from 'rxjs';
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

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxEndWithComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    take(3),
    mapNumberToChar(),
  );
  output = this.input.pipe(endWith('s'));
}
