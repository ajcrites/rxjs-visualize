import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { scan, take } from 'rxjs/operators';

@Component({
  selector: 'rx-scan',
  template: `
    <h1>scan</h1>
    <p>
      This is similar to <code>reduce</code> except that it emits every time the
      source emits instead of only emitting on completion.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxScanComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(5));
  output = this.input.pipe(scan((acc, curr) => acc + curr, 1));
}
