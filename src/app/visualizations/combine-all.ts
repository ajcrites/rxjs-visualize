import { readFileSync } from 'fs';

import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/combineAll';

declare let Prism: any;

@Component({
  selector: 'rx-combine-all',
  template: `
    <h1><a href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-combineAll">
      Combine All
    </a></h1>
    <p>
      I don't understand this operator yet.
    </p>
    <pre [prismHighlight]="'typescript'">${readFileSync(__filename).toString().replace(/[\s\S]*export class[\s\S]*?{([\s\S]*)}/, '$1')}</pre>
    <marble [source$]="outer$"></marble>
    <marble [source$]="inner$"></marble>
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
