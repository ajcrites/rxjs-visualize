import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/bufferTime';

@Component({
  selector: 'rx-buffer-time',
  template: `
    <marble [source$]="preBuffer$"></marble>
    <h2>Buffer Time</h2>
    <marble [source$]="postBuffer$"></marble>
  `,
})
export class RxBufferTimeComponent {
  preBuffer$ = Observable.interval(1000).take(20);
  postBuffer$ = this.preBuffer$.bufferTime(3000);
}
