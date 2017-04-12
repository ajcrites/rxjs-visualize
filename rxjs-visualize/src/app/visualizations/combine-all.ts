import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/combineAll';

@Component({
  selector: 'rx-combine-all',
  template: `
    <marble [source$]="outer$"></marble>
    <marble [source$]="inner$"></marble>
    <h2>Combine All</h2>
    <marble [source$]="combined$"></marble>
  `
})
export class RxCombineAllComponent {
  outer$ = Observable.interval(1000).take(20);
  inner$ = new Subject;
  combined$ = this.outer$.map(val =>
    Observable.interval(2000).take(3).do(
      value => this.inner$.next(value)
    )
  ).take(4).combineAll();
}
