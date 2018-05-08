import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { skip, take } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-skip',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Skip</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxSkipComponent {
  input$ = interval(1000).pipe(take(5), mapNumberToChar());
  output$ = this.input$.pipe(skip(3));
}
