import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { take, mapTo } from 'rxjs/operators';

@Component({
  selector: 'rx-map-to',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Map To</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxMapToComponent {
  input$ = interval(1000).pipe(take(5));
  output$ = this.input$.pipe(mapTo('a'));
}
