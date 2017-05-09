import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'rx-take-until',
  template: `
    <marble [source$]="input$"></marble>
    <marble [source$]="notifier$" [color]="'green'"></marble>
    <h2>Take Until</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxTakeUntilComponent {
  input$ = Observable.interval(1000).map(val => String.fromCharCode(val + 97)).take(7);
  notifier$ = Observable.interval(4500).mapTo('z').take(1);
  output$ = this.input$.takeUntil(this.notifier$);
}
