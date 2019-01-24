import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { throttle, take, delay } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-throttle',
  template: `
    <h1>Throttle</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxThrottleComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(500).pipe(
    // Clean up the display a bit
    delay(1000),
    mapNumberToChar(),
    take(10),
  );
  output = this.input.pipe(throttle(() => interval(1500)));
}
