import { Component } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { interval } from 'rxjs/observable/interval';
import { groupBy, map, take, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'rx-group-by',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Group By</h2>
    <marble [source$]="even$"></marble>
    <marble [source$]="odd$"></marble>
  `,
})
export class RxGroupByComponent {
  even$ = new Subject();
  odd$ = new Subject();
  input$ = interval(1000).pipe(
    take(20),
    groupBy(val => val % 2),
    map(obs => {
      if (obs.key) {
        obs.subscribe(this.odd$);
      } else {
        obs.subscribe(this.even$);
      }
      return obs;
    }),
    mergeAll(),
  );
}
