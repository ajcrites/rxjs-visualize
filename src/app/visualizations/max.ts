import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, max } from 'rxjs/operators';

@Component({
  selector: 'rx-max',
  template: `
    <marble [source]="input"></marble>
    <h2>Max</h2>
    <marble [source]="output"></marble>
  `,
})
export class RxMaxComponent {
  input = interval(1000).pipe(take(3));
  output = this.input.pipe(max());
}
