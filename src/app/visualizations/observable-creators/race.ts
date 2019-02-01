import { Component } from '@angular/core';

import { race, interval } from 'rxjs';
import { take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-race',
  template: `
    <h1>race</h1>
    <p>
      This is an Observable creator that mirrors the first Observable to emit.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="first"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="second"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="racing"></rxjs-visualize-marble>
  `,
})
export class RxRaceComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  first = interval(1000).pipe(
    take(10),
    mapNumberToChar(),
  );
  second = interval(1500).pipe(take(10));
  racing = race<number | string>(this.first, this.second);
}
