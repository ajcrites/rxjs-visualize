import { Component } from '@angular/core';

import { timer, animationFrameScheduler } from 'rxjs';
import { subscribeOn, take } from 'rxjs/operators';

@Component({
  selector: 'rx-subscribe-on',
  template: `
    <h1>subscribeOn</h1>
    <p>
      I'm honestly not sure what makes this different from
      <a routerLink="/observeOn"><code>observeOn</code></a>
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxSubscribeOnComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(5));
  output = this.input.pipe(subscribeOn(animationFrameScheduler, 100));
}
