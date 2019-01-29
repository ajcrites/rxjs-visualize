import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, pairwise } from 'rxjs/operators';

@Component({
  selector: 'rx-pairwise',
  template: `
    <h1>pairwise</h1>
    <p>
      Emits an array with two elements each time the source emits. The source
      must have admitted at least twice.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxPairwiseComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(10));
  output = this.input.pipe(pairwise());
}
