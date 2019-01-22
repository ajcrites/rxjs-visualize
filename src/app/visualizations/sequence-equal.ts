import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { sequenceEqual, take } from 'rxjs/operators';

@Component({
  selector: 'rx-sequence-equal',
  template: `
    <h1>Sequence Equal</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="compare"></marble> <marble [source]="compareTo"></marble>
    <marble [source]="output" color="green"></marble>
  `,
})
export class RxSequenceEqualComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  compare = interval(1000).pipe(take(5));
  compareTo = interval(1200).pipe(take(5));
  output = this.compare.pipe(sequenceEqual(this.compareTo));
}
