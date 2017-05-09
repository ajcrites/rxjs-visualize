import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeLast';

@Component({
  selector: 'rx-take-last',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Take Last</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxTakeLastComponent {
  input$ = Observable.interval(1000).map(val => String.fromCharCode(val + 97)).take(4);
  output$ = this.input$.takeLast(2);
}
