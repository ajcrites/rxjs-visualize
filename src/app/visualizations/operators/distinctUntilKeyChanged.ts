import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { distinctUntilKeyChanged, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-distinct-until-key-changed',
  template: `
    <h1>distinctUntilKeyChanged</h1>
    <p>
      Works like <code>distinctUntilChanged</code> except for objects. You
      provide a key to compare between objects.
    </p>
    <p>
      This name is could be a bit misleading since it's the <em>value</em> of
      the provided key that has to change since the previous emission rather
      than the key itself.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="display"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="distinct"></rxjs-visualize-marble>
  `,
})
export class RxDistinctUntilKeyChangedComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  values = [1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4, 4, 3, 1, 1, 2];
  input = timer(0, 1000).pipe(
    map(key => ({ key: this.values[key] })),
    take(this.values.length),
  );
  // This is fed from the input Observable and is the first diagram below
  display = this.input.pipe(map(val => val.key));
  distinct = this.input.pipe(
    distinctUntilKeyChanged('key'),
    map(val => val.key),
  );
}
