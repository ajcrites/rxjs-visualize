import { Component } from '@angular/core';

import { timer, onErrorResumeNext } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-on-error-resume-next-obc',
  template: `
    <h1>onErrorResumeNext (Observable Creator)</h1>
    <p>
      There is also an operator
      <a routerLink="/onErrorResumeNext"><code>onErrorResumeNext</code></a
      >.
    </p>
    <p>
      This is a bit of a mixture between <code>concat</code> and
      <code>catchError</code>. You can provide a list of Observables to switch
      to if the current source Observable completes <em>or</em> errors. This
      Observable creator starts with the first provided Observable in the
      arguments list.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="inputs[0]"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="inputs[1]"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="inputs[2]"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxOnErrorResumeNextObcComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  inputs = [
    timer(0, 1000).pipe(
      take(3),
      map(val => {
        if (val === 2) {
          throw new Error();
        }
        return val;
      }),
    ),

    timer(0, 1000).pipe(
      take(3),
      mapNumberToChar(),
      map(val => {
        if (val === 'b') {
          throw new Error();
        }
        return val;
      }),
    ),

    timer(0, 1000).pipe(
      take(3),
      mapNumberToChar(),
      map(val => val.toUpperCase()),
    ),
  ];
  output = onErrorResumeNext(...this.inputs);
}
