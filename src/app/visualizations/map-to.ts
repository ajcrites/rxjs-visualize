import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/take';

@Component({
  selector: 'rx-map-to',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Map</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxMapToComponent {
  input$ = Observable.interval(1000).take(5);
  output$ = this.input$.mapTo('a');
}




