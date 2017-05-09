import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/windowCount';

@Component({
  selector: 'rx-window-count',
  template: `
    <marble [source$]="input$"></marble>
    <marble *ngFor="let source$ of windows" [initTime]="initTime" [source$]="source$"></marble>
    <h2>Window Count</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxWindowCountComponent {
  initTime = (new Date).getTime();
  input$ = Observable.interval(1000).map(val => String.fromCharCode(val + 97)).take(10);
  windows = [];
  output$ = this.input$.windowCount(2).do(win => this.windows.push(win)).mergeAll();
}
