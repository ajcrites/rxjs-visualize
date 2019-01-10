import { Component } from '@angular/core';

import { of } from 'rxjs';
import { map, isEmpty } from 'rxjs/operators';

@Component({
  selector: 'rx-is-empty',
  template: `
    <marble [source]="input"></marble>
    <h2>Is Empty</h2>
    <marble [source]="output"></marble>
  `,
})
export class RxIsEmptyComponent {
  input = of(1);
  output = this.input.pipe(
    isEmpty(),
    map(Number),
  );
}
