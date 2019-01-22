import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { sample, mapTo, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-sample',
  template: `
    <h1>Sample</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble>
    <marble [source]="sample" color="green" [main]="input"></marble>
    <marble [source]="output"></marble>
  `,
})
export class RxSampleComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(1000).pipe(
    mapNumberToChar(),
    take(10),
  );
  sample = interval(1600).pipe(mapTo('x'));
  output = this.input.pipe(sample(this.sample));
}
