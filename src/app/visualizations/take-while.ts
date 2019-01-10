import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { takeWhile, take } from 'rxjs/operators';

@Component({
  selector: 'rx-take-while',
  template: `
    <marble [source]="input"></marble>
    <h2>Take While</h2>
    <marble [source]="output"></marble>
  `,
})
export class RxTakeWhileComponent {
  input = interval(1000).pipe(take(5));
  output = this.input.pipe(takeWhile(val => val !== 3));
}
