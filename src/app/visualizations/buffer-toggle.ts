import { Component } from '@angular/core';

import { Subject, interval } from 'rxjs';
import { tap, take, mapTo, bufferToggle } from 'rxjs/operators';

@Component({
  selector: 'rx-buffer-toggle',
  template: `
    <h1>Buffer Toggle</h1>

    <marble [source$]="preBuffer$"></marble>
    <marble [source$]="openBuffer$" [main$]="preBuffer$" color="blue"></marble>
    <marble [source$]="closeBuffer$" color="blue"></marble>
    <marble [source$]="postBuffer$"></marble>
  `,
})
export class RxBufferToggleComponent {
  preBuffer$ = interval(1000).pipe(take(20));
  openBuffer$ = interval(4250).pipe(mapTo('o'));
  // Used for displaying when the closing buffer is triggered, but does not
  // impact the output observable
  closeBuffer$ = new Subject();
  postBuffer$ = this.preBuffer$.pipe(
    bufferToggle(this.openBuffer$, () =>
      interval(1750).pipe(
        take(1),
        tap(() => this.closeBuffer$.next('c')),
      ),
    ),
  );
}
