import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mapTo';

@Component({
  selector: 'rx-delay-when',
  template: `
    <marble [source$]="input$"></marble>
    <marble *ngFor="let source$ of delays" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Delay</h2>
    <marble [source$]="delayed$"></marble>
  `
})
export class RxDelayWhenComponent {
  initTime = (new Date).getTime();
  delays = [];
  input$ = Observable.interval(1000).take(5);
  delayed$ = this.input$.delayWhen(val => {
    const obs = Observable.interval(val * 1000).take(1).mapTo(val);
    this.delays.push(obs);
    return obs;
  });
}



