import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { distinctUntilChanged, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-distinct-until-changed',
  template: `
    <h1>distinctUntilChanged</h1>
    <p>
      Unlink <code>distinct</code>, this can emit the same value more than once.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="distinct"></rxjs-visualize-marble>
  `,
})
export class RxDistinctUntilChangedComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  values = [1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4, 4, 3, 1, 1, 2];
  input = timer(0, 1000).pipe(
    map(val => this.values[val]),
    take(this.values.length),
  );
  distinct = this.input.pipe(distinctUntilChanged());
}
