import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/repeat';

@Component({
  selector: 'rx-repeat',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Repeat</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxRepeatComponent {
  input$ = Observable.interval(1000).take(3);
  output$ = this.input$.repeat(3);
}

