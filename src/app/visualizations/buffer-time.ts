import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/bufferTime';

@Component({
  selector: 'rx-buffer-time',
  template: `
    <h1><a href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferTime">
      Buffer Time
    </a></h1>
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
  preBuffer$ = Observable.interval(1000).take(20);
  // Practically equivalent to <code>.buffer(Observable.interval(3000))</code>
  postBuffer$ = this.preBuffer$.bufferTime(3000);
}
