import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Component({
  selector: 'rx-retry',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Retry</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxRetryComponent {
  input$ = Observable.interval(1000).map(val => {
    if (3 === val) {
      throw new Error;
    }
    return val + 1;
  });
  output$ = this.input$.retry(2);
}

