import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, pairwise } from 'rxjs/operators';

@Component({
  selector: 'rx-pairwise',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Pairwise</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxPairwiseComponent {
  input$ = interval(1000).pipe(take(10));
  output$ = this.input$.pipe(pairwise());
}
