import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { throttle, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-throttle',
  template: `
    <marble [source]="input"></marble>
    <h2>Throttle</h2>
    <marble [source]="output"></marble>
  `,
})
export class RxThrottleComponent {
  input = interval(500).pipe(
    mapNumberToChar(),
    take(10),
  );
  output = this.input.pipe(throttle(() => interval(1500)));
}
