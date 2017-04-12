import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/buffer';

@Component({
  selector: 'rx-buffer',
  template: `
    <marble [source$]="preBuffer$"></marble>
    <br>
    <marble [source$]="buffer$"></marble>
    <h2>Buffer</h2>
    <marble [source$]="postBuffer$"></marble>
  `,
})
export class RxBufferComponent {
  preBuffer$ = Observable.interval(1000).take(20);
  buffer$ = Observable.interval(3000).mapTo('B');
  postBuffer$ = this.preBuffer$.buffer(this.buffer$);
}
