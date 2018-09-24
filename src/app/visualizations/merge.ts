import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { merge, delay, take, map } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-merge',
  template: `
    <marble [source$]="first$"></marble>
    <marble [source$]="second$"></marble>
    <h2>Merge</h2>
    <marble [source$]="merged$"></marble>
  `,
})
export class RxMergeComponent {
  first$ = interval(1000).pipe(take(10), mapNumberToChar());
  second$ = interval(1000).pipe(delay(500), take(10));
  merged$ = this.first$.pipe(merge(this.second$));
}
