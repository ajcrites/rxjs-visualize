import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/windowToggle';

@Component({
  selector: 'rx-window-toggle',
  template: `
    <marble [source$]="input$"></marble>
    <marble [source$]="notifier$" [main$]="input$" [color]="'blue'"></marble>
    <h2>Window Toggle</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxWindowToggleComponent {
  input$ = Observable.interval(1000).map(val => String.fromCharCode(val + 97)).take(20);
  notifier$ = Observable.interval(3500).mapTo('w');
  output$ = this.input$.windowToggle(this.notifier$, () => Observable.interval(2000)).mergeAll();
}
