import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { take, mapTo, concatMapTo } from 'rxjs/operators';

@Component({
  selector: 'rx-concat-map-to',
  template: `
    <marble [source$]="higherOrder$"></marble>
    <marble [source$]="inner$"></marble>
    <h2>Concat Map</h2>
    <marble [source$]="firstOrder$"></marble>
  `,
})
export class RxConcatMapToComponent {
  initTime = new Date().getTime();
  higherOrder$ = interval(1000).pipe(take(4), mapTo('a'));
  inner$ = interval(1000).pipe(take(2));
  firstOrder$ = this.higherOrder$.pipe(concatMapTo(this.inner$));
}
