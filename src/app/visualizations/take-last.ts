import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { takeLast, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-take-last',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Take Last</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxTakeLastComponent {
  input$ = interval(1000).pipe(
    map(val => String.fromCharCode(val + 97)),
    take(4),
  );
  output$ = this.input$.pipe(takeLast(2));
}
