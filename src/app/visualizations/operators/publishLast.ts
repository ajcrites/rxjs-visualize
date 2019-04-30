import { Component } from '@angular/core';
import { ConnectableObservable, timer } from 'rxjs';
import { mapTo, publishLast, take, tap } from 'rxjs/operators';

@Component({
  selector: 'rx-publish-last',
  template: `
    <h1>publishLast</h1>
    <p>
      This is similar to <code>publish</code> except it emits only the last
      value of the source Observables.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxPublishLastComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    take(5),
    tap(val => {
      if (0 === val) {
        this.output.connect();
      }
    }),
  );
  output = this.input.pipe(
    mapTo('p'),
    publishLast(),
  ) as ConnectableObservable<number>;
}
