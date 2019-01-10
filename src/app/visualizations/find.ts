import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, find } from 'rxjs/operators';

@Component({
  selector: 'rx-find',
  template: `
    <marble [source]="input"></marble>
    <h2>Find</h2>
    <marble [source]="output"></marble>
  `,
})
export class RxFindComponent {
  input = interval(1000).pipe(take(5));
  output = this.input.pipe(find(val => val > 1));
}
