import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/bufferCount';

@Component({
  selector: 'rx-buffer-count',
  template: `
    <h1><a href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferCount">
      Buffer Count
    </a></h1>
    <pre>
      preBuffer$ = Observable.interval(1000).take(20);
      postBuffer$ = this.preBuffer$.bufferCount(3);
    </pre>

    <marble [source$]="preBuffer$"></marble>
    <marble [source$]="postBuffer$"></marble>
  `
})
export class RxBufferCountComponent {
  preBuffer$ = Observable.interval(1000).take(20);
  postBuffer$ = this.preBuffer$.bufferCount(3);
}
