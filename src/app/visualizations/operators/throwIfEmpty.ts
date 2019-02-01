import { Component } from '@angular/core';

import { timer, EMPTY } from 'rxjs';
import { mergeMapTo, throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'rx-throw-if-empty',
  template: `
    <h1>throwIfEmpty</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="throws"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="noThrows"></rxjs-visualize-marble>
  `,
})
export class RxThrowIfEmptyComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  throws = timer(2000).pipe(
    mergeMapTo(EMPTY),
    throwIfEmpty(),
  );
  noThrows = timer(2000).pipe(mergeMapTo(EMPTY));
}
