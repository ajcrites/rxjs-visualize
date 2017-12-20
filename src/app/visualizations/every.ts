import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { every, mapTo, map, take } from 'rxjs/operators';

@Component({
  selector: 'rx-every',
  template: `
    <marble [source$]="passEvery$"></marble>
    <marble [source$]="failEvery$"></marble>
    <h2>Every</h2>
    <marble [source$]="passed$"></marble>
    <marble [source$]="failed$"></marble>
  `,
})
export class RxEveryComponent {
  passEvery$ = interval(1000).pipe(take(5), mapTo('a'));
  failEvery$ = interval(1000).pipe(take(5), map(val => (val % 2 ? 'b' : 'a')));
  passed$ = this.passEvery$.pipe(
    every(val => 'a' === val),
    map(val => (val ? 1 : 0)),
  );
  failed$ = this.failEvery$.pipe(
    every(val => 'a' === val),
    map(val => (val ? 1 : 0)),
  );
}
