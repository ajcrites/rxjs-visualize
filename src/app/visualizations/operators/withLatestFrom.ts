import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { withLatestFrom, take, skip } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-with-latest-from',
  template: `
    <h1>withLatestFrom</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="letters"></marble> <marble [source]="numbers"></marble>
    <marble [source]="combined"></marble>
  `,
})
export class RxWithLatestFromComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  letters = timer(0, 1500).pipe(
    mapNumberToChar(),
    take(7),
  );
  numbers = timer(0, 1000).pipe(
    skip(1),
    take(8),
  );
  combined = this.letters.pipe(
    withLatestFrom(this.numbers, (letter, number) => letter + number),
  );
}
