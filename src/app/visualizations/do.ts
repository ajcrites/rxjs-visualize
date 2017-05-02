import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Component({
  selector: 'rx-do',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Do</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxDoComponent {
  input$ = Observable.interval(1000).take(20);
  output$ = this.input$.do(val => console.log(val));
}
