import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'rx-do',
  template: `
    <marble [source]="input"></marble>
    <h2>Do / Tap</h2>
    <marble [source]="output"></marble>
  `,
})
export class RxDoComponent {
  // The lettable operator version of `do` is `tap`
  input = interval(1000).pipe(take(20));
  // tslint:disable-next-line:no-console
  output = this.input.pipe(tap(val => console.log(val)));
}
