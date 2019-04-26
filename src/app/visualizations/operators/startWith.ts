import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-start-with',
  template: `
    <h1>startWith</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxStartWithComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
    take(3),
    mapNumberToChar(),
  );
  output = this.input.pipe(startWith('s'));
}
