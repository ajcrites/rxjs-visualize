import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { windowWhen, map, take, mapTo, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'rx-window-when',
  template: `
    <marble [source$]="input$"></marble>
    <marble [source$]="notifier$" [main$]="input$" [color]="'blue'"></marble>
    <h2>Window When</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxWindowWhenComponent {
  // I don't understand this one fully
  input$ = interval(1000).pipe(
    map(val => String.fromCharCode(val + 97)),
    take(10),
  );
  notifier$ = interval(2500).pipe(mapTo('w'));
  output$ = this.input$.pipe(
    windowWhen(() => interval(2500)),
    map(win => win.take(2)),
    mergeAll(),
  );
}
