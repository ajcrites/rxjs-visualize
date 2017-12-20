import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { skipUntil, mapTo, take } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-skip-until',
  template: `
    <marble [source$]="input$"></marble>
    <marble [source$]="skipper$" [color]="'green'"></marble>
    <h2>Skip Until</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxSkipUntilComponent {
  input$ = interval(1000).pipe(take(5), mapNumberToChar());
  skipper$ = interval(3400).pipe(take(1), mapTo('x'));
  output$ = this.input$.pipe(skipUntil(this.skipper$));
}
