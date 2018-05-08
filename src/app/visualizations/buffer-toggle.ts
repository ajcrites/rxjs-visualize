import { Component } from '@angular/core';

import { Subject, interval } from 'rxjs';
import { tap, take, mapTo, bufferToggle } from 'rxjs/operators';

@Component({
  selector: 'rx-buffer-toggle',
  /* tslint:disable:max-line-length */
  template: `
    <h1><a href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferToggle">
      Buffer Toggle
    </a></h1>
    <pre>
    preBuffer$ = Observable.interval(1000).take(20);
    openBuffer$ = Observable.interval(4250).mapTo('o');
    // Used for displaying when the closing buffer is triggered, but does not
    // impact the output observable
    closeBuffer$ = new Subject;
    postBuffer$ = this.preBuffer$.bufferToggle(this.openBuffer$, () => {{ '{' }}
      const closingObservable = Observable.interval(1750).take(1).do(() => this.closeBuffer$.next('c'));
      return closingObservable;
    });
    </pre>

    <marble [source$]="preBuffer$"></marble>
    <marble [source$]="openBuffer$" [main$]="preBuffer$" [color]="'blue'"></marble>
    <marble [source$]="closeBuffer$" [color]="'blue'"></marble>
    <marble [source$]="postBuffer$"></marble>
  `,
  /* tslint:enable */
})
export class RxBufferToggleComponent {
  preBuffer$ = interval(1000).pipe(take(20));
  openBuffer$ = interval(4250).pipe(mapTo('o'));
  // Used for displaying when the closing buffer is triggered, but does not
  // impact the output observable
  closeBuffer$ = new Subject();
  postBuffer$ = this.preBuffer$.pipe(
    bufferToggle(this.openBuffer$, () =>
      interval(1750).pipe(take(1), tap(() => this.closeBuffer$.next('c'))),
    ),
  );
}
