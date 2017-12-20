import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { takeUntil, mapTo, take } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-take-until',
  template: `
    <marble [source$]="input$"></marble>
    <marble [source$]="notifier$" [color]="'green'"></marble>
    <h2>Take Until</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxTakeUntilComponent {
  input$ = interval(1000).pipe(mapNumberToChar(), take(7));
  notifier$ = interval(4500).pipe(mapTo('z'), take(1));
  output$ = this.input$.pipe(takeUntil(this.notifier$));
}
