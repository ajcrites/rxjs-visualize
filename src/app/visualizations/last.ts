import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/last';

@Component({
  selector: 'rx-last',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Last</h2>
    <marble [source$]="last$"></marble>
  `
})
export class RxLastComponent {
  input$ = Observable.interval(1000).take(3);
  last$ = this.input$.last();
}

