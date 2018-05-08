import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, first } from 'rxjs/operators';

@Component({
  selector: 'rx-first',
  template: `
    <marble [source$]="input$"></marble>
    <h2>First</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxFirstComponent {
  input$ = interval(1000).pipe(take(3));
  output$ = this.input$.pipe(first());
}
