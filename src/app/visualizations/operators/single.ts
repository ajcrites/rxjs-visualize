import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { single, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-single',
  template: `
    <h1>single</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="notSingle"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="notFound"></rxjs-visualize-marble>
  `,
})
export class RxSingleComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    take(3),
    mapNumberToChar(),
  );
  // Emits the value when the source completes, if it's found
  output = this.input.pipe(single(val => val === 'b'));
  // Errors and emits nothing if there is more than one matching value
  notSingle = this.input.pipe(single(val => val === 'b' || val === 'a'));
  // Emits undefined
  notFound = this.input.pipe(single(val => val === 'd'));
}
