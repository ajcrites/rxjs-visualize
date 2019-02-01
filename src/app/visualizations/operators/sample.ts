import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { sample, mapTo, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-sample',
  template: `
    <h1>sample</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      [source]="sample"
      color="green"
      [main]="input"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxSampleComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    mapNumberToChar(),
    take(10),
  );
  // Using `sampleTime(1600)` would work the same way
  sample = timer(0, 1600).pipe(mapTo('x'));
  output = this.input.pipe(sample(this.sample));
}
