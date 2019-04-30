import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { reduce, take } from 'rxjs/operators';

@Component({
  selector: 'rx-reduce',
  template: `
    <h1>reduce</h1>
    <p>
      This is similar to <code>scan</code>, but it waits until the source
      completes before emitting.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxReduceComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(5));
  output = this.input.pipe(reduce((acc, curr) => acc + curr, 1));
}
