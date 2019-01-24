import { Component } from '@angular/core';

import { ConnectableObservable, interval } from 'rxjs';
import { tap, take, publishBehavior } from 'rxjs/operators';

@Component({
  selector: 'rx-publish-behavior',
  template: `
    <h1>Publish Behavior</h1>
    <p>
      This is similar to <code>publish</code> except it emits an initial value
      upon subscription. You can treat the returned ConnectableObservable like a
      <code>BehaviorSubject</code>.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble>
    <marble [source]="output" [initTime]="outputInitTime"></marble>
  `,
})
export class RxPublishBehaviorComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
    take(20),
    tap(val => {
      if (5 === val) {
        this.output.connect();
      }
    }),
  );
  outputInitTime = new Date().getTime() - 1000;
  output = this.input.pipe(publishBehavior(-1)) as ConnectableObservable<
    number
  >;
}
