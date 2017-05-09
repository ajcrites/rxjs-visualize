import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'rx-start-with',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Start With</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxStartWithComponent {
  input$ = Observable.interval(1000).take(3).map(val => String.fromCharCode(val + 97));
  output$ = this.input$.startWith('s');
}

