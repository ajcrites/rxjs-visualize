import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, bufferTime } from 'rxjs/operators';

@Component({
  selector: 'rx-buffer-time',
  template: `
    <h1>bufferTime</h1>
    <p>Similar to how <code>auditTime</code> works, but for buffers.</p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="preBuffer"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="postBuffer"></rxjs-visualize-marble>
  `,
})
export class RxBufferTimeComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  preBuffer = timer(0, 1000).pipe(take(20));
  // Practically equivalent to `buffer(interval(3000))`
  postBuffer = this.preBuffer.pipe(bufferTime(3000));
}
