import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'rx-distinct-until-changed',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Distinct Until Changed</h2>
    <marble [source$]="distinct$"></marble>
  `
})
export class RxDistinctUntilChangedComponent {
  values = [1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4, 4, 3, 1, 1, 2];
  input$ = Observable.interval(1000).map(val => this.values[val]).take(this.values.length);
  distinct$ = this.input$.distinctUntilChanged();
}
