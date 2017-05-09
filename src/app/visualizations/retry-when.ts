// It's unclear to me why one of the emissions is skipped
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/retryWhen';

@Component({
  selector: 'rx-retry-when',
  template: `
    <marble [source$]="retry$" [color]="yellow"></marble>
    <marble [source$]="input$"></marble>
    <h2>Retry When</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxRetryWhenComponent {
  retry$ = Observable.interval(4000).take(2).mapTo('r');
  input$ = Observable.interval(1000).map(val => {
    if (2 === val) {
      throw new Error;
    }
    return val + 1;
  });
  output$ = this.input$.retryWhen(() => this.retry$);
}

