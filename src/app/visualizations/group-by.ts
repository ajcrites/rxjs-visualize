import { Component } from '@angular/core';

import { Subject, interval } from 'rxjs';
import { groupBy, map, take, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'rx-group-by',
  template: `
    <h1>Group By</h1>
    <p>
      Group By is interesting in that it emits an Observable
      (<code>GroupedObservable</code>) from non-Obsevable values. Here I create
      keys '1' and '0' and use these two Observables as sources for the
      visualizations.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="even"></marble>
    <marble [source]="odd"></marble>
  `,
})
export class RxGroupByComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  even = new Subject();
  odd = new Subject();
  input = interval(1000).pipe(
    take(20),
    groupBy(val => val % 2),
    map(obs => {
      if (obs.key) {
        obs.subscribe(this.odd);
      } else {
        obs.subscribe(this.even);
      }
      return obs;
    }),
    // This is done so the input Observable emits its values. Otherwise, it
    // would emit the GroupedObservable `mergeMap` could also be used.
    mergeAll(),
  );
}
