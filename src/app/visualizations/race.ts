import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { take, skip, map, race } from 'rxjs/operators';

@Component({
  selector: 'rx-race',
  template: `
    <marble [source$]="faster$"></marble>
    <marble [source$]="slower$"></marble>
    <h2>Race</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxRaceComponent {
  faster$ = interval(1000).pipe(take(5), map(val => 'a' + val));
  slower$ = interval(800).pipe(skip(1), take(5), map(val => 'b' + val));
  output$ = this.faster$.pipe(race(this.slower$));
}
