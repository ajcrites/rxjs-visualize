import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { merge, delay, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-merge',
  template: `
    <h1>Merge</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="first"></marble> <marble [source]="second"></marble>
    <marble [source]="merged"></marble>
  `,
})
export class RxMergeComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  first = interval(1000).pipe(
    take(10),
    mapNumberToChar(),
  );
  second = interval(1000).pipe(
    delay(500),
    take(10),
  );
  merged = this.first.pipe(merge(this.second));
}
