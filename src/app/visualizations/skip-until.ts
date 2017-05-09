import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/skipUntil';

@Component({
  selector: 'rx-skip-until',
  template: `
    <marble [source$]="input$"></marble>
    <marble [source$]="skipper$" [color]="'green'"></marble>
    <h2>Skip Until</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxSkipUntilComponent {
  input$ = Observable.interval(1000).take(5).map(val => String.fromCharCode(val + 97));
  skipper$ = Observable.interval(3400).take(1).mapTo('x');
  output$ = this.input$.skipUntil(this.skipper$);
}

