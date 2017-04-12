import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/audit';

@Component({
  selector: 'rx-audit',
  template: `
    <marble [source$]="preAudit$"></marble>
    <h2><a href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-audit">Audit</a></h2>
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
