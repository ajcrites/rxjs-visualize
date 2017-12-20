import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { merge, delay, take, map } from 'rxjs/operators';

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
  first$ = interval(1000).pipe(
    take(10),
    map(count => String.fromCharCode(count + 97)),
  );
  second$ = interval(1000).pipe(delay(500), take(10));
  merged$ = this.first$.pipe(merge(this.second$));
}
