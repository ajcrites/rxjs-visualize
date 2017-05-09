import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'rx-pluck',
  template: `
    <marble [source$]="display$"></marble>
    <h2>Pluck</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxPluckComponent {
  values = [1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4, 4, 3, 1, 1, 2];
  input$ = Observable.interval(1000).map(key => ({key: this.values[key]})).take(this.values.length);
  display$ = this.input$.map(val => val.key);
  output$ = this.input$.pluck('key');
}

