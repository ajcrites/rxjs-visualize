import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { throttle, take, map } from 'rxjs/operators';

@Component({
  selector: 'rx-throttle',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Throttle</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxThrottleComponent {
  input$ = interval(500).pipe(
    map(val => String.fromCharCode(val + 97)),
    take(10),
  );
  output$ = this.input$.pipe(throttle(() => interval(1500)));
}
