import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMapTo';

@Component({
  selector: 'rx-switch-map-to',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble [source$]="inner$"></marble>
    <h2>Switch Map To</h2>
    <marble [source$]="firstOrder$"></marble>
  `
})
export class RxSwitchMapToComponent {
  higherOrder$ = Observable.interval(2000).take(4).mapTo('a');
  inner$ = Observable.interval(1000).take(3);
  firstOrder$ = this.higherOrder$.switchMapTo(this.inner$);
}
