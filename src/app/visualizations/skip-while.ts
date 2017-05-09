import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/skipWhile';

@Component({
  selector: 'rx-skip-while',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Skip While</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxSkipWhileComponent {
  input$ = Observable.interval(1000).take(6);
  output$ = this.input$.skipWhile(val => val != 3);
}

