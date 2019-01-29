import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { throttle, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-throttle',
  template: `
    <h1>throttle</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxThrottleComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 500).pipe(
    mapNumberToChar(),
    take(19),
  );
  output = this.input.pipe(throttle(() => timer(1500)));
}
