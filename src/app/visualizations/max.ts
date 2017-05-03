import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/max';

@Component({
  selector: 'rx-max',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Max</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxMaxComponent {
  input$ = Observable.interval(1000).take(3);
  output$ = this.input$.max();
}





