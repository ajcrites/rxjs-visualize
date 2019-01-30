import { Component } from '@angular/core';

import { pairs, timer, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rx-pairs',
  template: `
    <h1>pairs</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="output"></marble>
  `,
})
export class RxPairsComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  pairs = pairs({ a: 1, b: 2, c: 3 });
  // zipping with the timer allows us to emit the pairs Observable values on
  // a timer. Otherwise, they would emit immediately.
  output = zip(this.pairs, timer(0, 1000)).pipe(map(([pairs]) => [pairs]));
}
