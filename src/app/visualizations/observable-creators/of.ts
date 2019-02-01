import { Component } from '@angular/core';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'rx-of',
  template: `
    <h1>of</h1>
    <p>
      This is the simplest Observable creator. It will emit all of the provided
      values immediately.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="ofed"></rxjs-visualize-marble>
  `,
})
export class RxOfComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  ofed = of(1, 2).pipe(delay(1000));
}
