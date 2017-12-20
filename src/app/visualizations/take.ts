import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'rx-take',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Take</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxTakeComponent {
  input$ = interval(1000).pipe(
    map(val => String.fromCharCode(val + 97)),
    take(4),
  );
  output$ = this.input$.pipe(take(2));
}
