import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, combineLatest } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-combine-latest',
  template: `
    <h1>Combine Latest</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="first"></marble> <marble [source]="second"></marble>
    <marble [source]="combined"></marble>
  `,
})
export class RxCombineLatestComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  first = interval(1500).pipe(
    take(15),
    mapNumberToChar(),
  );
  second = interval(1000).pipe(take(20));
  combined = this.first.pipe(combineLatest(this.second));
}
