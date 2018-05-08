import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { windowToggle, take, mapTo, mergeAll } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-window-toggle',
  template: `
    <marble [source$]="input$"></marble>
    <marble [source$]="notifier$" [main$]="input$" [color]="'blue'"></marble>
    <h2>Window Toggle</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxWindowToggleComponent {
  input$ = interval(1000).pipe(mapNumberToChar(), take(20));
  notifier$ = interval(3500).pipe(mapTo('w'));
  output$ = this.input$.pipe(
    windowToggle(this.notifier$, () => interval(2000)),
    mergeAll(),
  );
}
