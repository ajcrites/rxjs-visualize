import { Component } from '@angular/core';

import { interval, of } from 'rxjs';
import { zipAll, take, map } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-zip-all',
  template: `
    <h1>zipAll</h1>
    <p>
      Merges Observable emissions into a value. When each source Observable
      emits or completes, the projection function (defaulting to an array of
      values) is called and the return value is emitted.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxZipAllComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(1000).pipe(
    mapNumberToChar(),
    take(2),
  );
  output = this.input.pipe(
    map(val => of(val)),
    zipAll(),
  );
}
