import { Component } from '@angular/core';

import { timer } from 'rxjs';
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

    <rxjs-visualize-marble [source]="preAudit"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="postAudit"></rxjs-visualize-marble>
  `,
})
export class RxAuditTimeComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  preAudit = timer(0, 1000).pipe(take(20));
  // Practically equivalent to `audit(() => timer(2500))`
  postAudit = this.preAudit.pipe(auditTime(2500));
}
