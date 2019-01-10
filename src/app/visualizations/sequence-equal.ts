import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { sequenceEqual, take } from 'rxjs/operators';

@Component({
  selector: 'rx-sequence-equal',
  template: `
    <marble [source]="compare"></marble> <marble [source]="compareTo"></marble>
    <h2>Sequence Equal</h2>
    <marble [source]="output" color="green"></marble>
  `,
})
export class RxSequenceEqualComponent {
  compare = interval(1000).pipe(take(5));
  compareTo = interval(1200).pipe(take(5));
  output = this.compare.pipe(sequenceEqual(this.compareTo));
}
