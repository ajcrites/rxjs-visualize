import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { elementAt, take } from 'rxjs/operators';

@Component({
  selector: 'rx-element-at',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Element At</h2>
    <marble [source$]="elementAt$"></marble>
    <marble [source$]="elementAtUnknown$"></marble>
  `,
})
export class RxElementAtComponent {
  input$ = interval(1000).pipe(take(5));
  elementAt$ = this.input$.pipe(elementAt(2));
  elementAtUnknown$ = this.input$.pipe(elementAt<number | string>(21, 'n'));
}
