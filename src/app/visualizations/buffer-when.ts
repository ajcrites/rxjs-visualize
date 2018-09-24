import { Component } from '@angular/core';

import { Subject, interval } from 'rxjs';
import { tap, take, bufferWhen } from 'rxjs/operators';

@Component({
  selector: 'rx-buffer-when',
  template: `
    <h1>Buffer When</h1>
    <p>
      This is similar to <code>audit</code> except that it will collect <i>all</i>
      values until the next notifier Observable emission rather than just the
      last value.
    </p>
    <pre>
    preBuffer$ = Observable.interval(1000).take(20);
    closingBuffer$ = new Subject;
    postBuffer$ = this.preBuffer$.bufferWhen(() =>
      Observable.interval(1000 + Math.random() * 4000).do(() =>
        this.closingBuffer$.next('s')
      )
    );
    </pre>

    <marble [source$]="preBuffer$"></marble>
    <marble [source$]="closingBuffer$" [color]="'blue'"></marble>
    <marble [source$]="postBuffer$"></marble>
  `,
})
export class RxBufferWhenComponent {
  preBuffer$ = interval(1000).pipe(take(20));
  closingBuffer$ = new Subject();
  postBuffer$ = this.preBuffer$.pipe(
    bufferWhen(() =>
      interval(1000 + Math.random() * 4000).pipe(
        tap(() => this.closingBuffer$.next('s')),
      ),
    ),
  );
}
