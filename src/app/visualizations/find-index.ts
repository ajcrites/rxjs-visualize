import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/findIndex';

@Component({
  selector: 'rx-find-index',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Find Index</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxFindIndexComponent {
  input$ = Observable.interval(1000).take(5).map(val => String.fromCharCode(val + 97));
  output$ = this.input$.findIndex(val => val.charCodeAt(0) > 98);
}

