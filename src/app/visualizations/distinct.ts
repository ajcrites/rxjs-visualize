import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { distinct, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-distinct',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Distinct</h2>
    <marble [source$]="distinct$"></marble>
  `,
})
export class RxDistinctComponent {
  input$ = interval(1000).pipe(map(val => (val % 2 ? val : 0)), take(20));
  distinct$ = this.input$.pipe(distinct());
}
