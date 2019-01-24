import { Component } from '@angular/core';

import { EMPTY } from 'rxjs';
import { delay, defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'rx-default-if-empty',
  template: `
    <h1>defaultIfEmpty</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="default"></marble>
  `,
})
export class RxDefaultIfEmptyComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  // If delay is not used, the visualization will run instantly and look strange
  default = EMPTY.pipe(
    delay(1000),
    defaultIfEmpty('e'),
  );
}
