import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { take, takeLast } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-take-last',
  template: `
    <h1>takeLast</h1>
    <p>This will emit the taken values simultaneously.</p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxTakeLastComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    mapNumberToChar(),
    take(4),
  );
  output = this.input.pipe(takeLast(2));
}
