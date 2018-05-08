import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Component({
  selector: 'rx-retry',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Retry</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxRetryComponent {
  input$ = interval(1000).pipe(
    map(val => {
      if (3 === val) {
        throw new Error();
      }
      return val + 1;
    }),
  );
  output$ = this.input$.pipe(retry(2));
}
