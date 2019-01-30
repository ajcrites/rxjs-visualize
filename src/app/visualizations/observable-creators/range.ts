import { Component } from '@angular/core';

import { range, timer, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rx-range',
  template: `
    <h1>range</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="output"></marble>
  `,
})
export class RxRangeComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  ranged = range(24, 32);
  // zipping with the timer allows us to emit the range Observable values on
  // a timer. Otherwise, they would emit immediately.
  output = zip(this.ranged, timer(0, 1000)).pipe(map(([val]) => [val]));
}
