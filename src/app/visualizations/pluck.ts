import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, map, pluck } from 'rxjs/operators';

@Component({
  selector: 'rx-pluck',
  template: `
    <marble [source$]="display$"></marble>
    <h2>Pluck</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxPluckComponent {
  values = [1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4, 4, 3, 1, 1, 2];
  input$ = interval(1000).pipe(
    map(key => ({ key: this.values[key] })),
    take(this.values.length),
  );
  display$ = this.input$.pipe(map(val => val.key));
  output$ = this.input$.pipe(pluck('key'));
}
