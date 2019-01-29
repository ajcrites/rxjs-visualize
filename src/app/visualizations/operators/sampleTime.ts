import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { sampleTime, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-sample-time',
  template: `
    <h1>sampleTime</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxSampleTimeComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    mapNumberToChar(),
    take(10),
  );
  output = this.input.pipe(sampleTime(1600));
}
