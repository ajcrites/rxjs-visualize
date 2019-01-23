import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, delay, concat } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-concat',
  template: `
    <h1>Concat</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="first"></marble> <marble [source]="second"></marble>
    <marble [source]="concatenated"></marble>
  `,
})
export class RxConcatComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  first = interval(1000).pipe(
    take(10),
    mapNumberToChar(),
  );
  second = interval(1000).pipe(
    delay(500),
    take(10),
  );
  concatenated = this.first.pipe(concat(this.second));
}
