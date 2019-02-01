import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, find } from 'rxjs/operators';

@Component({
  selector: 'rx-find',
  template: `
    <h1>find</h1>
    <p>This emits as soon as the value you're trying to find is emitted.</p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxFindComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(5));
  output = this.input.pipe(find(val => val > 1));
}
