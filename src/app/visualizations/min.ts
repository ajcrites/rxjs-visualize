import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, map, min } from 'rxjs/operators';

@Component({
  selector: 'rx-min',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Min</h2>
    <marble [source$]="min$"></marble>
  `,
})
export class RxMinComponent {
  values = [1, -1, 2, 4, 0];
  input$ = interval(1000).pipe(
    map(val => this.values[val]),
    take(this.values.length),
  );
  min$ = this.input$.pipe(min());
}
