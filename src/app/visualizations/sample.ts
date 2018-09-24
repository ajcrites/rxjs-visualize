import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { sample, mapTo, take } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-sample',
  template: `
    <marble [source$]="input$"></marble>
    <marble [source$]="sample$" [color]="green" [main$]="input$"></marble>
    <h2>Sample</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxSampleComponent {
  input$ = interval(1000).pipe(mapNumberToChar(), take(10));
  sample$ = interval(1600).pipe(mapTo('x'));
  output$ = this.input$.pipe(sample(this.sample$));
}
