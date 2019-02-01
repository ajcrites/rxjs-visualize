import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, audit } from 'rxjs/operators';

@Component({
  selector: 'rx-audit',
  template: `
    <h1>audit</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="preAudit"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="postAudit"></rxjs-visualize-marble>
  `,
})
export class RxAuditComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  preAudit = timer(0, 1000).pipe(take(20));
  // Interestingly, when the source Observable (preAudit) completes, the
  // last value it emitted is _not_ emitted by `.audit` even after the
  // duration Observable completes.
  postAudit = this.preAudit.pipe(audit(() => timer(2500)));
}
