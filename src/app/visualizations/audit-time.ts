import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, auditTime } from 'rxjs/operators';

@Component({
  selector: 'rx-audit-time',
  template: `
    <h1>Audit Time</h1>
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
})
export class RxAuditTimeComponent {
  preAudit$ = interval(1000).pipe(take(20));
  // Practically equivalent to <code>.audit(() => Observable.interval(2500))</code>
  postAudit$ = this.preAudit$.pipe(auditTime(2500));
}
