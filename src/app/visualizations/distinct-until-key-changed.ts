import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { distinctUntilKeyChanged, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-distinct-until-key-changed',
  template: `
    <marble [source]="display"></marble>
    <h2>Distinct Until Key Changed</h2>
    <marble [source]="distinct"></marble>
  `,
})
export class RxDistinctUntilKeyChangedComponent {
  values = [1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4, 4, 3, 1, 1, 2];
  input = interval(1000).pipe(
    map(key => ({ key: this.values[key] })),
    take(this.values.length),
  );
  display = this.input.pipe(map(val => val.key));
  distinct = this.input.pipe(
    distinctUntilKeyChanged('key'),
    map(val => val.key),
  );
}
