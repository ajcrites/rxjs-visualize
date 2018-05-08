import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, auditTime } from 'rxjs/operators';

@Component({
  selector: 'rx-audit-time',
  /* tslint:disable:max-line-length */
  template: `
    <h1><a href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-auditTime">
      Audit Time
    </a></h1>
    <p>
      This is similar to <code>audit</code>, but it wraps the provided number as an interval timer.
    </p>
    <pre>
      preAudit$ = Observable.interval(1000).take(20);
      // Practically equivalent to <code>.audit(() => Observable.interval(2500))</code>
      postAudit$ = this.preAudit$.auditTime(2500);
    </pre>

    <marble [source$]="preAudit$"></marble>
    <marble [source$]="postAudit$"></marble>
  `,
  /* tslint:enable */
})
export class RxAuditTimeComponent {
  preAudit$ = interval(1000).pipe(take(20));
  // Practically equivalent to <code>.audit(() => Observable.interval(2500))</code>
  postAudit$ = this.preAudit$.pipe(auditTime(2500));
}
