// This one confuses me
import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, mapTo, repeatWhen } from 'rxjs/operators';

@Component({
  selector: 'rx-repeat-when',
  template: `
    <marble [source]="input" color="yellow"></marble>
    <h2>Repeat When</h2>
    <marble [source]="output"></marble>
  `,
})
export class RxRepeatWhenComponent {
  input = interval(3000).pipe(
    take(3),
    mapTo('r'),
  );
  output = this.input.pipe(repeatWhen(() => interval(1000).pipe(take(2))));
}
