import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { scan, take } from 'rxjs/operators';

@Component({
  selector: 'rx-scan',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Scan</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxScanComponent {
  input$ = interval(1000).pipe(take(5));
  output$ = this.input$.pipe(scan((acc, curr) => acc + curr, 1));
}
