import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'rx-filter',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Filter</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxFilterComponent {
  input$ = Observable.interval(1000).take(20);
  output$ = this.input$.filter(val => !!(val % 2));
}
