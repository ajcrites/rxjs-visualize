import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { throttleTime, take } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-throttle-time',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Throttle Time</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxThrottleTimeComponent {
  input$ = interval(500).pipe(mapNumberToChar(), take(10));
  output$ = this.input$.pipe(throttleTime(1500));
}
