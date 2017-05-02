import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mapTo';

@Component({
  selector: 'rx-delay-when',
  template: `
    <marble [source$]="input$"></marble>
    <marble *ngFor="let source$ of delays" [initTime]="initTime" [source$]="source$"></marble>
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
export class RxDelayWhenComponent {
  initTime = (new Date).getTime();
  delays = [];
  input$ = Observable.interval(1000).take(5);
  delayed$ = this.input$.delayWhen(val => {
    const obs = Observable.interval(val * 1000).take(1).mapTo(val);
    this.delays.push(obs);
    return obs;
  });
}



