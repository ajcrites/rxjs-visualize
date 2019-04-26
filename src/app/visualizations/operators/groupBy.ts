import { Component } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { groupBy, map, mergeAll, take } from 'rxjs/operators';

@Component({
  selector: 'rx-group-by',
  template: `
    <h1>groupBy</h1>
    <p>
      Group By is interesting in that it emits an Observable
      (<code>GroupedObservable</code>) from non-Obsevable values. Here I create
      keys '1' and '0' and use these two Observables as sources for the
      visualizations.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="even"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="odd"></rxjs-visualize-marble>
  `,
})
export class RxGroupByComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  even = new Subject();
  odd = new Subject();
  input = timer(0, 1000).pipe(
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
