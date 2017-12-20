import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { sampleTime, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-sample-time',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Sample Time</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxSampleTimeComponent {
  input$ = interval(1000).pipe(
    map(val => String.fromCharCode(val + 97)),
    take(10),
  );
  output$ = this.input$.pipe(sampleTime(1600));
}
