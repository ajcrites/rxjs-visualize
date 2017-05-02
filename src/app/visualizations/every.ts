import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/every';

@Component({
  selector: 'rx-every',
  template: `
    <marble [source$]="passEvery$"></marble>
    <marble [source$]="failEvery$"></marble>
    <h2>Every</h2>
    <marble [source$]="passed$"></marble>
    <marble [source$]="failed$"></marble>
  `
})
export class RxEveryComponent {
  passEvery$ = Observable.interval(1000).take(5).mapTo('a');
  failEvery$ = Observable.interval(1000).take(5).map(val => val % 2 ? 'b' : 'a');
  passed$ = this.passEvery$.every(val => 'a' === val).map(val => val ? 1 : 0);
  failed$ = this.failEvery$.every(val => 'a' === val).map(val => val ? 1 : 0);
}

