import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'rx-take-while',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Take While</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxTakeWhileComponent {
  input$ = Observable.interval(1000).take(5);
  output$ = this.input$.takeWhile(val => val != 3);
}
