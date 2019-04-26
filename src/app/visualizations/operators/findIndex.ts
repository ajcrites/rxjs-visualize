import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { findIndex, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-find-index',
  template: `
    <h1>findIndex</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxFindIndexComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    take(5),
    mapNumberToChar(),
  );
  output = this.input.pipe(findIndex(val => val.charCodeAt(0) > 98));
}
