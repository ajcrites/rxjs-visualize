import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/elementAt';

@Component({
  selector: 'rx-element-at',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Element At</h2>
    <marble [source$]="elementAt$"></marble>
    <marble [source$]="elementAtUnknown$"></marble>
  `
})
export class RxElementAtComponent {
  input$ = Observable.interval(1000).take(5);
  elementAt$ = this.input$.elementAt(2);
  elementAtUnknown$ = this.input$.elementAt<number|string>(21, 'n');
}
