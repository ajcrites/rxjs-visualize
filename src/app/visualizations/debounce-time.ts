import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'rx-debounce-time',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Debounce</h2>
    <marble [source$]="debounced$"></marble>
  `
})
// This is essentially the same as `debounce`, with `Observable.interval`.
export class RxDebounceTimeComponent {
  input$ = Observable.interval(2000).mergeMap(val =>
    Observable.interval(250).map(innerVal => val + innerVal).take(3)
  ).take(20);
  debounced$ = this.input$.debounceTime(1000);
}


