import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, auditTime } from 'rxjs/operators';

@Component({
  selector: 'rx-audit-time',
  template: `
    <h1>auditTime</h1>
    <p>
      This is similar to <code>audit</code>, but it wraps the provided number as
      an interval timer.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="preAudit"></marble> <marble [source]="postAudit"></marble>
  `,
})
export class RxAuditTimeComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  preAudit = interval(1000).pipe(take(20));
  // Practically equivalent to `audit(() => interval(2500))`
  postAudit = this.preAudit.pipe(auditTime(2500));
}
