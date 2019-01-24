import { Component } from '@angular/core';

import { interval, timer } from 'rxjs';
import { take, shareReplay, mergeMapTo } from 'rxjs/operators';

@Component({
  selector: 'rx-share-replay',
  template: `
    <h1>shareReplay</h1>
    <p>
      I'm actually not sure why the output emits all values. I can't find a
      great example for this yet.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxShareReplayComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(1000).pipe(take(4));
  subject = this.input.pipe(shareReplay(1));
  output = timer(3500).pipe(mergeMapTo(this.subject));
}
