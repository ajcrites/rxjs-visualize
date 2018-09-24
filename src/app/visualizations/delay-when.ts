import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { delayWhen, take, mapTo } from 'rxjs/operators';

@Component({
  selector: 'rx-delay-when',
  template: `
    <marble [source$]="input$"></marble>
    <marble *ngFor="let source$ of delays" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Delay</h2>
    <marble [source$]="delayed$"></marble>
  `,
})
export class RxDelayWhenComponent {
  initTime = new Date().getTime();
  delays = [];
  input$ = interval(1000).pipe(take(5));
  delayed$ = this.input$.pipe(
    delayWhen(val => {
      const obs = interval(val * 1000).pipe(take(1), mapTo(val));
      this.delays.push(obs);
      return obs;
    }),
  );
}
