import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'rx-scan',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Scan</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxScanComponent {
  input$ = Observable.interval(1000).take(5);
  output$ = this.input$.scan((acc, curr) => acc + curr, 1);
}

