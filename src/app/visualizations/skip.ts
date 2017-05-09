import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/skip';

@Component({
  selector: 'rx-skip',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Skip</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxSkipComponent {
  input$ = Observable.interval(1000).take(5).map(val => String.fromCharCode(val + 97));
  output$ = this.input$.skip(3);
}

