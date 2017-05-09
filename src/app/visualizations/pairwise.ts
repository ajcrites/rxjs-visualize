import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'rx-pairwise',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Pairwise</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxPairwiseComponent {
  input$ = Observable.interval(1000).take(10);
  output$ = this.input$.pairwise();
}

