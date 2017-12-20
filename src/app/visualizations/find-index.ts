import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { map, take, findIndex } from 'rxjs/operators';

@Component({
  selector: 'rx-find-index',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Find Index</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxFindIndexComponent {
  input$ = interval(1000).pipe(
    take(5),
    map(val => String.fromCharCode(val + 97)),
  );
  output$ = this.input$.pipe(findIndex(val => val.charCodeAt(0) > 98));
}
