import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { takeLast, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

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
    mapNumberToChar(),
    take(4),
  );
  output$ = this.input$.pipe(takeLast(2));
}
