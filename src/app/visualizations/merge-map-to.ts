import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { mergeMapTo, mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'rx-merge-map-to',
  template: `
    <marble [source]="higherOrder"></marble> <marble [source]="inner"></marble>
    <h2>Merge Map To</h2>
    <marble [source]="firstOrder"></marble>
  `,
})
export class RxMergeMapToComponent {
  higherOrder = interval(1000).pipe(
    take(4),
    mapTo('a'),
  );
  inner = interval(1000).pipe(take(3));
  firstOrder = this.higherOrder.pipe(mergeMapTo(this.inner));
}
