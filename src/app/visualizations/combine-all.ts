import { Component } from '@angular/core';

import { Subject, interval } from 'rxjs';
import { tap, take, map, combineAll } from 'rxjs/operators';

@Component({
  selector: 'rx-combine-all',
  /* tslint:disable:max-line-length */
  template: `
    <h1><a href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-combineAll">
      Combine All
    </a></h1>
    <p>
      I don't understand this operator yet.
    </p>
    <marble [source$]="outer$"></marble>
    <marble [source$]="inner$"></marble>
    <marble [source$]="combined$"></marble>
  `,
  /* tslint:enable */
})
export class RxCombineAllComponent {
  outer$ = interval(1000).pipe(take(20));
  inner$ = new Subject();
  combined$ = this.outer$.pipe(
    map(() =>
      interval(2000).pipe(take(3), tap(value => this.inner$.next(value))),
    ),
    take(4),
    combineAll(),
  );
}
