import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/find';

@Component({
  selector: 'rx-find',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Find</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxFindComponent {
  input$ = Observable.interval(1000).take(5);
  output$ = this.input$.find(val => val > 1);
}

