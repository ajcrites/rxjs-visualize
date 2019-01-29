import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, finalize } from 'rxjs/operators';

@Component({
  selector: 'rx-finalize',
  template: `
    <h1>finalize</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxFinalizeComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(5));
  // tslint:disable-next-line:no-console ... open your console!
  output = this.input.pipe(finalize(() => console.log('Hello!')));
}
