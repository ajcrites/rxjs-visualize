import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/sample';

@Component({
  selector: 'rx-sample-time',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Sample Time</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxSampleTimeComponent {
  input$ = Observable.interval(1000).map(val => String.fromCharCode(val + 97)).take(10);
  output$ = this.input$.sampleTime(1600);
}

