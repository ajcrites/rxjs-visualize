import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'rx-debounce',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Debounce</h2>
    <marble [source$]="debounced$"></marble>
  `
})
// Debounce timer starts over when a value is emitted
// Emit multiple values, but then do not emit another value until after 1 second
// Debounce catches the last value in this set as well as the final value
// Essentially, the difference has to be between the final inner emission (at
// 750ms) and the next outer observable emission (at 2s, more than a 1s
// difference)
export class RxDebounceComponent {
  input$ = Observable.interval(2000).mergeMap(val =>
    Observable.interval(250).map(innerVal => val + innerVal).take(3)
  ).take(20);
  debounced$ = this.input$.debounce(() => Observable.interval(1000));
}

