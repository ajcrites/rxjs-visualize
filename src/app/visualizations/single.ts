import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/single';

@Component({
  selector: 'rx-single',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Single</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxSingleComponent {
  input$ = Observable.interval(1000).take(3).map(val => String.fromCharCode(val + 97));
  output$ = this.input$.single(val => val == 'b');
}

