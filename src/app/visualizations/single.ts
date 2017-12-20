import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { single, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-single',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Single</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxSingleComponent {
  input$ = interval(1000).pipe(
    take(3),
    map(val => String.fromCharCode(val + 97)),
  );
  output$ = this.input$.pipe(single(val => val === 'b'));
}
