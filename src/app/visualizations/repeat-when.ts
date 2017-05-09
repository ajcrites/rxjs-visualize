// This one confuses me
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/repeatWhen';

@Component({
  selector: 'rx-repeat-when',
  template: `
    <marble [source$]="input$" [color]="'yellow'"></marble>
    <h2>Repeat When</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxRepeatWhenComponent {
  input$ = Observable.interval(3000).take(3).mapTo('r');
  output$ = this.input$.repeatWhen(() => Observable.interval(1000).take(2));
}

