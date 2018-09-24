import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Component({
  selector: 'rx-delay',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Delay</h2>
    <marble [source$]="delayed$"></marble>
  `,
})
export class RxDelayComponent {
  input$ = interval(1000).pipe(take(20));
  delayed$ = this.input$.pipe(delay(1000));
}
