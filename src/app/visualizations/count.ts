import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, count } from 'rxjs/operators';

@Component({
  selector: 'rx-count',
  template: `
    <marble [source]="input"></marble>
    <h2>Count</h2>
    <marble [source]="count"></marble>
  `,
})
export class RxCountComponent {
  input = interval(1000).pipe(take(5));
  count = this.input.pipe(count());
}
