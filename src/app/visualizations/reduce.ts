import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/reduce';

@Component({
  selector: 'rx-reduce',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Reduce</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxReduceComponent {
  input$ = Observable.interval(1000).take(5);
  output$ = this.input$.reduce((acc, curr) => acc + curr, 1);
}

