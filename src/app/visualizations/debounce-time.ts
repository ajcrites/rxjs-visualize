import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { take, mergeMap, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rx-debounce-time',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Debounce</h2>
    <marble [source$]="debounced$"></marble>
  `,
})
// This is essentially the same as `debounce`, with `Observable.interval`.
export class RxDebounceTimeComponent {
  input$ = interval(2000).pipe(
    mergeMap(val =>
      interval(250).pipe(map(innerVal => val + innerVal), take(3)),
    ),
    take(20),
  );
  debounced$ = this.input$.pipe(debounceTime(1000));
}
