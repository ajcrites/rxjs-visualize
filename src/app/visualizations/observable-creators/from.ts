import { Component } from '@angular/core';

import { from, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'rx-from',
  template: `
    <h1>from</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="ofed"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="fromed"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="fromPromise"></rxjs-visualize-marble>
  `,
})
export class RxFromComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  ofed = of([1, 2]).pipe(delay(1000));
  fromed = from([1, 2]).pipe(delay(1000));
  fromPromise = from(this.fromed.toPromise());
}
