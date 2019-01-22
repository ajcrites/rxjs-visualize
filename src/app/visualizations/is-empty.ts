import { Component } from '@angular/core';

import { of } from 'rxjs';
import { map, isEmpty } from 'rxjs/operators';

@Component({
  selector: 'rx-is-empty',
  template: `
    <h1>Is Empty</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxIsEmptyComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = of(1);
  output = this.input.pipe(
    isEmpty(),
    map(Number),
  );
}
