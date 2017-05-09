import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Component({
  selector: 'rx-take',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Take</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxTakeComponent {
  input$ = Observable.interval(1000).map(val => String.fromCharCode(val + 97)).take(4);
  output$ = this.input$.take(2);
}
