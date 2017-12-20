import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { startWith, take } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-start-with',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Start With</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxStartWithComponent {
  input$ = interval(1000).pipe(take(3), mapNumberToChar());
  output$ = this.input$.pipe(startWith('s'));
}
