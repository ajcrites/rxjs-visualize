import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concat';

@Component({
  selector: 'rx-concat',
  template: `
    <marble [source$]="first$"></marble>
    <marble [source$]="second$"></marble>
    <h2>Concat</h2>
    <marble [source$]="concatenated$"></marble>
  `
})
export class RxConcatComponent {
  first$ = Observable.interval(1000).take(10).map(count => String.fromCharCode(count + 97));
  second$ = Observable.interval(1000).take(10);
  concatenated$ = this.first$.concat(this.second$);
}

