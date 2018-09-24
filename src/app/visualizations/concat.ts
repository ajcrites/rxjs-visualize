import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, delay, concat } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-concat',
  template: `
    <marble [source$]="first$"></marble>
    <marble [source$]="second$"></marble>
    <h2>Concat</h2>
    <marble [source$]="concatenated$"></marble>
  `,
})
export class RxConcatComponent {
  first$ = interval(1000).pipe(take(10), mapNumberToChar());
  second$ = interval(1000).pipe(delay(500), take(10));
  concatenated$ = this.first$.pipe(concat(this.second$));
}
