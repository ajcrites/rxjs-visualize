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
export class RxDelayComponent {
  input$ = Observable.interval(1000).take(20);
  delayed$ = this.input$.delay(1000);
}


