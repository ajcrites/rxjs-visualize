import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilKeyChanged';

@Component({
  selector: 'rx-distinct-until-key-changed',
  template: `
    <marble [source$]="display$"></marble>
    <h2>Distinct Until Key Changed</h2>
    <marble [source$]="distinct$"></marble>
  `
})
export class RxDistinctUntilKeyChangedComponent {
  values = [
    {key: 1},
    {key: 1},
    {key: 2},
    {key: 2},
    {key: 2},
    {key: 1},
    {key: 1},
    {key: 2},
    {key: 3},
    {key: 3},
    {key: 4},
    {key: 4},
    {key: 3},
    {key: 1},
    {key: 1},
    {key: 2},
  ];
  input$ = Observable.interval(1000).map(val => this.values[val]).take(this.values.length);
  display$ = this.input$.map(val => val.key);
  distinct$ = this.input$.distinctUntilKeyChanged('key').map(val => val.key);
}
