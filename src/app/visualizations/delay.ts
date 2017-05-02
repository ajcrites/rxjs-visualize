import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';

@Component({
  selector: 'rx-delay',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Delay</h2>
    <marble [source$]="delayed$"></marble>
  `
})
// Debounce timer starts over when a value is emitted
// Emit multiple values, but then do not emit another value until after 1 second
// Debounce catches the last value in this set as well as the final value
// Essentially, the difference has to be between the final inner emission (at
// 750ms) and the next outer observable emission (at 2s, more than a 1s
// difference)
export class RxDelayComponent {
  input$ = Observable.interval(1000).take(20);
  delayed$ = this.input$.delay(1000);
}


