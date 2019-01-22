import { Component } from '@angular/core';

import { empty } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'rx-default-if-empty',
  template: `
    <h1>Default If Empty</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="default"></marble>
  `,
})
export class RxDefaultIfEmptyComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  default = empty().pipe(defaultIfEmpty('e'));
}
