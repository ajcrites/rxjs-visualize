import { Component } from '@angular/core';
import { forkJoin, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-fork-join',
  template: `
    <h1>forkJoin</h1>
    <p>
      This is similar to <code>concat</code>, <code>merge</code>,
      <code>zip</code>, and <code>combineLatest</code>.
    </p>
    <p>
      The key difference with <code>forkJoin</code> is that it does not emit
      until all source Observables complete. Once that happens, it emits
      <em>once</em>: an array of the last values that were emitted by the source
      Observables.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble
      *ngFor="let input of inputs"
      [source]="input"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="forkJoined"></rxjs-visualize-marble>
  `,
})
export class RxForkJoinComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  inputs = [
    timer(0, 1000).pipe(take(3)),
    timer(0, 1000).pipe(
      mapNumberToChar(),
      take(3),
    ),
    timer(0, 1000).pipe(
      map(val => val * 3),
      take(3),
    ),
  ];
  forkJoined = forkJoin(...this.inputs);
}
