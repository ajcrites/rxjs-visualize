import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, audit } from 'rxjs/operators';

@Component({
  selector: 'rx-audit',
  template: `
    <h1>audit</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="preAudit"></marble> <marble [source]="postAudit"></marble>
  `,
})
export class RxAuditComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  preAudit = interval(1000).pipe(take(20));
  // Interestingly, when the source Observable (preAudit) completes, the
  // last value it emitted is _not_ emitted by `.audit` even after the
  // duration Observable completes.
  postAudit = this.preAudit.pipe(audit(() => interval(2500)));
}
