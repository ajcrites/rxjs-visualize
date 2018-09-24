import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-take',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Take</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxTakeComponent {
  input$ = interval(1000).pipe(mapNumberToChar(), take(4));
  output$ = this.input$.pipe(take(2));
}
