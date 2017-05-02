import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/first';

@Component({
  selector: 'rx-first',
  template: `
    <marble [source$]="input$"></marble>
    <h2>First</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxFirstComponent {
  input$ = Observable.interval(1000).take(3);
  output$ = this.input$.first();
}

