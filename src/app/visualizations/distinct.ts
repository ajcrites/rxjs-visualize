import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinct';

@Component({
  selector: 'rx-distinct',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Distinct</h2>
    <marble [source$]="distinct$"></marble>
  `
})
export class RxDistinctComponent {
  input$ = Observable.interval(1000).map(val => val % 2 ? val : 0).take(20);
  distinct$ = this.input$.distinct();
}




