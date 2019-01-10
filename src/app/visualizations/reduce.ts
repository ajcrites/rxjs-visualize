import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, reduce } from 'rxjs/operators';

@Component({
  selector: 'rx-reduce',
  template: `
    <marble [source]="input"></marble>
    <h2>Reduce</h2>
    <marble [source]="output"></marble>
  `,
})
export class RxReduceComponent {
  input = interval(1000).pipe(take(5));
  output = this.input.pipe(reduce((acc, curr) => acc + curr, 1));
}
