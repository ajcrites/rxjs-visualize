import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/auditTime';

@Component({
  selector: 'rx-audit-time',
  template: `
    <marble [source$]="preAudit$"></marble>
    <h2>Audit Time</h2>
    <marble [source$]="postAudit$"></marble>
  `
})
export class RxAuditTimeComponent {
  preAudit$ = Observable.interval(1000).take(20);
  postAudit$ = this.preAudit$.auditTime(2500);
}


