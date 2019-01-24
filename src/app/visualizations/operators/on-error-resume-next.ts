import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { onErrorResumeNext, map, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-on-error-resume-next',
  template: `
    <h1>On Error Resume Next</h1>
    <p>
      This is a bit of a mixture between <code>concat</code> and
      <code>catchError</code>. You can provide a list of Observables to switch
      to if the source Observable completes <em>or</em> errors. It's also
      similar to.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="inputs[0]"></marble>
    <marble [source]="inputs[1]"></marble>
    <marble [source]="inputs[2]"></marble> <marble [source]="output"></marble>
  `,
})
export class RxOnErrorResumeNextComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  inputs = [
    interval(1000).pipe(
      take(3),
      map(val => {
        if (val === 2) {
          throw new Error();
        }
        return val;
      }),
    ),

    interval(1000).pipe(
      take(3),
      mapNumberToChar(),
      map(val => {
        if (val === 'b') {
          throw new Error();
        }
        return val;
      }),
    ),

    interval(1000).pipe(
      take(3),
      mapNumberToChar(),
      map(val => val.toUpperCase()),
    ),
  ];
  output = (this.inputs[0] as any).pipe(
    onErrorResumeNext(this.inputs[1], this.inputs[2]),
  );
}
