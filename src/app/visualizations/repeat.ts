import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { take, repeat } from 'rxjs/operators';

@Component({
  selector: 'rx-repeat',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Repeat</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxRepeatComponent {
  input$ = interval(1000).pipe(take(3));
  output$ = this.input$.pipe(repeat(3));
}
