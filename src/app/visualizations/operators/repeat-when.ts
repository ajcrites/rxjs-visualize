// This one confuses me
import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, mapTo, repeatWhen } from 'rxjs/operators';

@Component({
  selector: 'rx-repeat-when',
  template: `
    <h1>Repeat When</h1>
    <p>
      This mirrors the source Observable <em>and</em> resubscribes to the source
      upon completion.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input" color="yellow"></marble>
    <marble [source]="output"></marble>
  `,
})
export class RxRepeatWhenComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(3000).pipe(
    take(3),
    mapTo('r'),
  );
  output = this.input.pipe(repeatWhen(() => interval(1000).pipe(take(2))));
}
