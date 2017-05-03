import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMapTo';

@Component({
  selector: 'rx-merge-map-to',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble [source$]="inner$"></marble>
    <h2>Merge Map</h2>
    <marble [source$]="firstOrder$"></marble>
  `
})
export class RxMergeMapToComponent {
  initTime = (new Date).getTime();
  higherOrder$ = Observable.interval(1000).take(4).mapTo('a');
  inner$ = Observable.interval(1000).take(3);
  firstOrder$ = this.higherOrder$.mergeMapTo(this.inner$);
}
