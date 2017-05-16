import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/audit';

@Component({
  selector: 'rx-audit',
  template: `
    <h1><a href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-audit">
      Audit
    </a></h1>
    <pre>
      preAudit$ = Observable.interval(1000).take(20);
      // Interestingly, when the source Observable (preAudit$) completes, the
      // last value it emitted is _not_ emitted by <code>.audit</code> even after the
      // duration Observable completes.
      postAudit$ = this.preAudit$.audit(() => Observable.interval(2500));
    </pre>

    <marble [source$]="preAudit$"></marble>
    <marble [source$]="postAudit$"></marble>
  `,
})
export class RxAuditComponent {
  preAudit$ = Observable.interval(1000).take(20);
  // Interestingly, when the source Observable (preAudit$) completes, the
  // last value it emitted is _not_ emitted by `.audit` even after the
  // duration Observable completes.
  postAudit$ = this.preAudit$.audit(() => Observable.interval(2500));
}
