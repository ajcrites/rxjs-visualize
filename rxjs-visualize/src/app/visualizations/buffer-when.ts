import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/bufferWhen';

@Component({
  selector: 'rx-buffer-when',
  template: `
    <marble [source$]="preBuffer$"></marble>
    <marble [source$]="closingBuffer$" [color]="'blue'"></marble>
    <h2>Buffer When</h2>
    <marble [source$]="postBuffer$"></marble>
  `,
})
export class RxBufferWhenComponent {
  preBuffer$ = Observable.interval(1000).take(20);
  closingBuffer$ = new Subject;
  postBuffer$ = this.preBuffer$.bufferWhen(() =>
    Observable.interval(1000 + Math.random() * 4000).do(() =>
      this.closingBuffer$.next('s')
    )
  );
}
