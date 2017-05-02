import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/isEmpty';

@Component({
  selector: 'rx-is-empty',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Is Empty</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxIsEmptyComponent {
  input$ = Observable.of(1);
  output$ = this.input$.isEmpty().map(Number);
}

