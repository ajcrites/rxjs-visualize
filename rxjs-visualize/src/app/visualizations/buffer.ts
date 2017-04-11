import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/buffer';
import { animations } from './visualizations.animations';

@Component({
  selector: 'rx-buffer',
  template: `
    <marble [source$]="preBuffer$"></marble>
    <br>
    <marble [source$]="buffer$" [positioningSource$]="preBuffer$"></marble>
    <h2>Buffer</h2>
    <marble [source$]="postBuffer$" [positioningSource$]="preBuffer$"></marble>
  `,
  animations,
})
export class RxBufferComponent {
  preBuffer$ = Observable.interval(1000).take(20);
  buffer$ = Observable.interval(3000).mapTo('B');
  postBuffer$ = this.preBuffer$.buffer(this.buffer$);
}

