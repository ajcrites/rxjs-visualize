import { Component } from '@angular/core';

import { ConnectableObservable, interval } from 'rxjs';
import { tap, take, publish } from 'rxjs/operators';

@Component({
  selector: 'rx-publish',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Publish</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxPublishComponent {
  input$ = interval(1000).pipe(
    take(20),
    tap(val => {
      if (5 === val) {
        this.output$.connect();
      }
    }),
  );
  output$ = this.input$.pipe(publish()) as ConnectableObservable<number>;
}
