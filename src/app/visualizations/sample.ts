import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/sample';

@Component({
  selector: 'rx-sample',
  template: `
    <marble [source$]="input$"></marble>
    <marble [source$]="sample$" [color]="green" [main$]="input$"></marble>
    <h2>Sample</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxSampleComponent {
  input$ = Observable.interval(1000).map(val => String.fromCharCode(val + 97)).take(10);
  sample$ = Observable.interval(1600).mapTo('x');
  output$ = this.input$.sample(this.sample$);
}

