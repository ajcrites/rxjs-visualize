import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, last } from 'rxjs/operators';

@Component({
  selector: 'rx-last',
  template: `
    <marble [source]="input"></marble>
    <h2>Last</h2>
    <marble [source]="last"></marble>
  `,
})
export class RxLastComponent {
  input = interval(1000).pipe(take(3));
  last = this.input.pipe(last());
}
