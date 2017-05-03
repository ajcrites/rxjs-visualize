import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'rx-map',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Map</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxMapComponent {
  input$ = Observable.interval(1000).take(20);
  output$ = this.input$.map(val => val * 10);
}




