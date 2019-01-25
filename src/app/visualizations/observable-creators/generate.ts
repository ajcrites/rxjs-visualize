import { Component } from '@angular/core';

import { generate, interval, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rx-generate',
  template: `
    <h1>generate</h1>
    <p>
      This is a funky Observable that lets you create a collection from an
      iteration function and condition.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="output"></marble>
  `,
})
export class RxGenerateComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  generated = generate(0, x => x < 5, x => x + 1).pipe(map(val => val + 'g'));
  generatedObj = generate({
    initialState: 0,
    condition: x => x < 5,
    iterate: x => x + 1,
  }).pipe(map(val => val + 'o'));
  // zipping with the interval allows us to emit the other Observable values on
  // a timer. Otherwise, they would emit immediately.
  output = zip(this.generated, this.generatedObj, interval(1000)).pipe(
    map(([g1, g2]) => [g1, g2]),
  );
}
