import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, bufferTime } from 'rxjs/operators';

@Component({
  selector: 'rx-buffer-time',
  template: `
    <h1>Buffer Time</h1>
    <p>
      Similar to how <code>auditTime</code> works, but for buffers.
    </p>
    <pre>
      preBuffer$ = Observable.interval(1000).take(20);
      // Practically equivalent to <code>.buffer(Observable.interval(3000))</code>
      postBuffer$ = this.preBuffer$.bufferTime(3000);
    </pre>

    <marble [source$]="preBuffer$"></marble>
    <marble [source$]="postBuffer$"></marble>
  `,
})
export class RxBufferTimeComponent {
  preBuffer$ = interval(1000).pipe(take(20));
  // Practically equivalent to <code>.buffer(Observable.interval(3000))</code>
  postBuffer$ = this.preBuffer$.pipe(bufferTime(3000));
}
