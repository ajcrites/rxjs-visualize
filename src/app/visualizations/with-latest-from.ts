import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';

@Component({
  selector: 'rx-with-latest-from',
  template: `
    <marble [source$]="letters$"></marble>
    <marble [source$]="numbers$"></marble>
    <h2>With Latest From</h2>
    <marble [source$]="combined$"></marble>
  `
})
export class RxWithLatestFromComponent {
  letters$ = Observable.interval(1500).map(val => String.fromCharCode(val + 97)).take(7);
  numbers$ = Observable.interval(1000).skip(1).take(8);
  combined$ = this.letters$.withLatestFrom(this.numbers$, (letter, number) => letter + number);
}
