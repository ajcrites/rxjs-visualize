import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'rx-tap',
  template: `
    <h1>tap (formerly <code>.do</code>)</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxTapComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(20));
  // tslint:disable-next-line:no-console ... open your console!
  output = this.input.pipe(tap(val => console.log(val)));
}
