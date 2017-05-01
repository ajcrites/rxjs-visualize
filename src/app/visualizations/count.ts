import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/count';

@Component({
  selector: 'rx-count',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Count</h2>
    <marble [source$]="count$"></marble>
  `
})
export class RxCountComponent {
  input$ = Observable.interval(1000).take(5);
  count$ = this.input$.count();
}
