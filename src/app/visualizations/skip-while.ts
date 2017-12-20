import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { skipWhile, take } from 'rxjs/operators';

@Component({
  selector: 'rx-skip-while',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Skip While</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxSkipWhileComponent {
  input$ = interval(1000).pipe(take(6));
  output$ = this.input$.pipe(skipWhile(val => val !== 3));
}
