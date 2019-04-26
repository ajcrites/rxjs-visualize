import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { map, sequenceEqual, take } from 'rxjs/operators';

@Component({
  selector: 'rx-sequence-equal',
  template: `
    <h1>sequenceEqual</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="compare"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="compareTo"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      [source]="isEqual"
      color="green"
    ></rxjs-visualize-marble>

    <rxjs-visualize-marble [source]="compareNot"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="isNotEqual"></rxjs-visualize-marble>

    <rxjs-visualize-marble [source]="compareShort"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="short"></rxjs-visualize-marble>
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
