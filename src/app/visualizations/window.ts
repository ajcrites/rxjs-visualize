import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { window, map, take, mapTo, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'rx-window',
  template: `
    <marble [source$]="input$"></marble>
    <marble [source$]="notifier$" [main$]="input$" [color]="'blue'"></marble>
    <h2>Window</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxWindowComponent {
  input$ = interval(1000).pipe(
    map(val => String.fromCharCode(val + 97)),
    take(10),
  );
  notifier$ = interval(3500).pipe(mapTo('w'));
  output$ = this.input$.pipe(
    window(this.notifier$),
    map(win => win.pipe(take(2))),
    mergeAll(),
  );
}
