import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { skipLast, take } from 'rxjs/operators';

@Component({
  selector: 'rx-skip-last',
  template: `
    <h1>skipLast</h1>
    <p>
      This buffers the count of emissions so there is a delay for the initial
      emission of the <code>skipLast</code> Observable.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxSkipLastComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(5));
  output = this.input.pipe(skipLast(2));
}
