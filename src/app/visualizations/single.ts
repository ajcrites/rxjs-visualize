import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { single, take } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-single',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Single</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxSingleComponent {
  input$ = interval(1000).pipe(take(3), mapNumberToChar());
  output$ = this.input$.pipe(single(val => val === 'b'));
}
