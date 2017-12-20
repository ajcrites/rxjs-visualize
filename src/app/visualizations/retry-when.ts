// It's unclear to me why one of the emissions is skipped
import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { retryWhen, take, map, mapTo } from 'rxjs/operators';

@Component({
  selector: 'rx-retry-when',
  template: `
    <marble [source$]="retry$" [color]="'yellow'"></marble>
    <marble [source$]="input$"></marble>
    <h2>Retry When</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxRetryWhenComponent {
  retry$ = interval(4000).pipe(take(2), mapTo('r'));
  input$ = interval(1000).pipe(
    map(val => {
      if (2 === val) {
        throw new Error();
      }
      return val + 1;
    }),
  );
  output$ = this.input$.pipe(retryWhen(() => this.retry$));
}
