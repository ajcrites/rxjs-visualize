import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { scan, take } from 'rxjs/operators';

@Component({
  selector: 'rx-scan',
  template: `
    <h1>Scan</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxScanComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(1000).pipe(take(5));
  output = this.input.pipe(scan((acc, curr) => acc + curr, 1));
}
