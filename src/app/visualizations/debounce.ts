import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { take, mergeMap, map, debounce } from 'rxjs/operators';

@Component({
  selector: 'rx-debounce',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Debounce</h2>
    <marble [source$]="debounced$"></marble>
  `,
})
export class RxDebounceComponent {
  // Debounce timer starts over when a value is emitted
  // Emit multiple values, but then do not emit another value until after 1 second
  // Debounce catches the last value in this set as well as the final value
  // Essentially, the difference has to be between the final inner emission (at
  // 750ms) and the next outer observable emission (at 2s, more than a 1s
  // difference)
  input$ = interval(2000).pipe(
    mergeMap(val =>
      interval(250).pipe(map(innerVal => val + innerVal), take(3)),
    ),
    take(20),
  );
  debounced$ = this.input$.pipe(debounce(() => interval(1000)));
}
