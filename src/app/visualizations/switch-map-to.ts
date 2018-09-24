import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { switchMapTo, mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'rx-switch-map-to',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble [source$]="inner$"></marble>
    <h2>Switch Map To</h2>
    <marble [source$]="firstOrder$"></marble>
  `,
})
export class RxSwitchMapToComponent {
  higherOrder$ = interval(2000).pipe(take(4), mapTo('a'));
  inner$ = interval(1000).pipe(take(3));
  firstOrder$ = this.higherOrder$.pipe(switchMapTo(this.inner$));
}
