import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/groupBy';

@Component({
  selector: 'rx-group-by',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Group By</h2>
    <marble [source$]="even$"></marble>
    <marble [source$]="odd$"></marble>
  `
})
export class RxGroupByComponent {
  input$ = Observable.interval(1000).take(20).groupBy(val => val % 2).map(obs => {
    if (obs.key) {
      obs.subscribe(this.odd$);
    } else {
      obs.subscribe(this.even$);
    }
    return obs;
  }).mergeAll();
  even$ = new Subject();
  odd$ = new Subject();
}
