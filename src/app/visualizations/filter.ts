import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, filter } from 'rxjs/operators';

@Component({
  selector: 'rx-filter',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Filter</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxFilterComponent {
  input$ = interval(1000).pipe(take(20));
  output$ = this.input$.pipe(filter(val => !!(val % 2)));
}
