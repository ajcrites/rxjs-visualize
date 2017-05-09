import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/throttleTime';

@Component({
  selector: 'rx-throttle-time',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Throttle Time</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxThrottleTimeComponent {
  input$ = Observable.interval(500).map(val => String.fromCharCode(val + 97)).take(10);
  output$ = this.input$.throttleTime(1500);
}
