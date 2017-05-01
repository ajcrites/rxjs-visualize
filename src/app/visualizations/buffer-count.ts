import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/bufferCount';

@Component({
  selector: 'rx-buffer-count',
  template: `
    <marble [source$]="preBuffer$"></marble>
    <h2>Buffer Count</h2>
    <marble [source$]="postBuffer$"></marble>
  `
})
export class RxBufferCountComponent {
  preBuffer$ = Observable.interval(1000).take(20);
  postBuffer$ = this.preBuffer$.bufferCount(3);
}
