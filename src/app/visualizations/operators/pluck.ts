import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, map, pluck } from 'rxjs/operators';

@Component({
  selector: 'rx-pluck',
  template: `
    <h1>pluck</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="display"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxPluckComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  values = [1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4, 4, 3, 1, 1, 2];
  // not shown; this would be like { key: 1 }, { key: 1 }, { key: 2 } ...
  input = timer(0, 1000).pipe(
    map(key => ({ key: this.values[key] })),
    take(this.values.length),
  );
  // These function identically
  display = this.input.pipe(map(val => val.key));
  output = this.input.pipe(pluck('key'));
}
