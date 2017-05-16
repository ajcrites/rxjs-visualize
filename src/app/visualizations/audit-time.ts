import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/auditTime';

@Component({
  selector: 'rx-audit-time',
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
  `
})
export class RxAuditTimeComponent {
  preAudit$ = Observable.interval(1000).take(20);
  // Practically equivalent to <code>.audit(() => Observable.interval(2500))</code>
  postAudit$ = this.preAudit$.auditTime(2500);
}
