import { Component } from '@angular/core';
import { EMPTY } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'rx-default-if-empty',
  template: `
    <h1>defaultIfEmpty</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="default"></rxjs-visualize-marble>
  `,
})
export class RxDefaultIfEmptyComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  default = EMPTY.pipe(defaultIfEmpty('e'));
}
