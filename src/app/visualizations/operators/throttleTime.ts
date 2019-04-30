import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { take, throttleTime } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-throttle-time',
  template: `
    <h1>throttleTime</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxThrottleTimeComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 500).pipe(
    mapNumberToChar(),
    take(19),
  );
  output = this.input.pipe(throttleTime(1500));
}
