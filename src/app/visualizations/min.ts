import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/min';

@Component({
  selector: 'rx-min',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Min</h2>
    <marble [source$]="min$"></marble>
  `
})
export class RxMinComponent {
  values = [1, -1, 2, 4, 0];
  input$ = Observable.interval(1000).map(val => this.values[val]).take(this.values.length);
  min$ = this.input$.min();
}

