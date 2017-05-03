import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concatMapTo';

@Component({
  selector: 'rx-concat-map-to',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble [source$]="inner$"></marble>
    <h2>Concat Map</h2>
    <marble [source$]="firstOrder$"></marble>
  `
})
export class RxConcatMapToComponent {
  initTime = (new Date).getTime();
  higherOrder$ = Observable.interval(1000).take(4).mapTo('a');
  inner$ = Observable.interval(1000).take(2);
  firstOrder$ = this.higherOrder$.concatMapTo(this.inner$);
}
