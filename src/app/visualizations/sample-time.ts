import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { sampleTime, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

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
    mapNumberToChar(),
    take(10),
  );
  output$ = this.input$.pipe(sampleTime(1600));
}
