import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { sampleTime, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-sample-time',
  template: `
    <h1>Sample Time</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxSampleTimeComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
    mapNumberToChar(),
    take(10),
  );
  output = this.input.pipe(sampleTime(1600));
}
