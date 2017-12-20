import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { windowCount, map, take, tap, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'rx-window-count',
  template: `
    <marble [source$]="input$"></marble>
    <marble *ngFor="let source$ of windows" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Window Count</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxWindowCountComponent {
  initTime = new Date().getTime();
  input$ = interval(1000).pipe(
    map(val => String.fromCharCode(val + 97)),
    take(10),
  );
  windows = [];
  output$ = this.input$.pipe(
    windowCount(2),
    tap(win => this.windows.push(win)),
    mergeAll(),
  );
}
