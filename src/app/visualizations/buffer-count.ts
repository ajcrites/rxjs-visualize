import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, bufferCount } from 'rxjs/operators';

@Component({
  selector: 'rx-buffer-count',
  template: `
    <h1>Buffer Count</h1>
    <pre>
      preBuffer$ = Observable.interval(1000).take(20);
      postBuffer$ = this.preBuffer$.bufferCount(3);
    </pre>

    <marble [source$]="preBuffer$"></marble>
    <marble [source$]="postBuffer$"></marble>
  `,
})
export class RxBufferCountComponent {
  preBuffer$ = interval(1000).pipe(take(20));
  postBuffer$ = this.preBuffer$.pipe(bufferCount(3));
}
