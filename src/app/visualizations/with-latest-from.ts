import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { withLatestFrom, take, skip } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-with-latest-from',
  template: `
    <marble [source$]="letters$"></marble>
    <marble [source$]="numbers$"></marble>
    <h2>With Latest From</h2>
    <marble [source$]="combined$"></marble>
  `,
})
export class RxWithLatestFromComponent {
  letters$ = interval(1500).pipe(mapNumberToChar(), take(7));
  numbers$ = interval(1000).pipe(skip(1), take(8));
  combined$ = this.letters$.pipe(
    withLatestFrom(this.numbers$, (letter, number) => letter + number),
  );
}
