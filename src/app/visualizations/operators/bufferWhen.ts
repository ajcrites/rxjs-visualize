import { Component } from '@angular/core';

import { timer, Subject } from 'rxjs';
import { tap, take, bufferWhen } from 'rxjs/operators';

@Component({
  selector: 'rx-buffer-when',
  template: `
    <h1>bufferWhen</h1>
    <p>
      This is similar to <code>audit</code> except that it will collect
      <em>all</em> values until the next notifier Observable emission rather
      than just the last value.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="preBuffer"></marble>
    <marble [source]="closingBuffer" [main]="preBuffer" color="blue"></marble>
    <marble [source]="postBuffer"></marble>
  `,
})
export class RxBufferWhenComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  preBuffer = timer(0, 1000).pipe(take(20));
  closingBuffer = new Subject();
  postBuffer = this.preBuffer.pipe(
    bufferWhen(() =>
      timer(1000 + Math.random() * 4000).pipe(
        tap(() => this.closingBuffer.next('s')),
      ),
    ),
  );
}
