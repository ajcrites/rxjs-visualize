import { Component } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { interval } from 'rxjs/observable/interval';
import { take, combineLatest } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-combine-latest',
  template: `
    <marble [source$]="first$"></marble>
    <marble [source$]="second$"></marble>
    <h2>Combine Latest</h2>
    <marble [source$]="combined$"></marble>
  `,
})
export class RxCombineLatestComponent {
  first$ = interval(1500).pipe(take(15), mapNumberToChar());
  second$ = interval(1000).pipe(take(20));
  combined$ = this.first$.pipe(combineLatest(this.second$));
}
