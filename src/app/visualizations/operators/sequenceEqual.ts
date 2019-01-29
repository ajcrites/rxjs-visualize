import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { sequenceEqual, take, map } from 'rxjs/operators';

@Component({
  selector: 'rx-sequence-equal',
  template: `
    <h1>sequenceEqual</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="compare"></marble> <marble [source]="compareTo"></marble>
    <marble [source]="isEqual" color="green"></marble>

    <marble [source]="compareNot"></marble>
    <marble [source]="isNotEqual"></marble>

    <marble [source]="compareShort"></marble> <marble [source]="short"></marble>
  `,
})
export class RxSequenceEqualComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  compare = timer(0, 1000).pipe(take(5));
  compareTo = timer(0, 1200).pipe(take(5));
  isEqual = this.compare.pipe(sequenceEqual(this.compareTo));

  compareNot = timer(0, 1200).pipe(
    take(5),
    map(val => (val > 2 ? 'a' : val)),
  );
  isNotEqual = this.compare.pipe(
    sequenceEqual<string | number>(this.compareNot),
  );

  compareShort = timer(0, 1200).pipe(take(3));
  short = this.compare.pipe(sequenceEqual<string | number>(this.compareShort));
}
