import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { skip, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-skip',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Skip</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxSkipComponent {
  input$ = interval(1000).pipe(
    take(5),
    map(val => String.fromCharCode(val + 97)),
  );
  output$ = this.input$.pipe(skip(3));
}
