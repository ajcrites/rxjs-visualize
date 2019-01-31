import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, shareReplay, mergeMapTo } from 'rxjs/operators';

@Component({
  selector: 'rx-share-replay',
  template: `
    <h1>shareReplay</h1>
    <p>
      This will replay the provided number of emissions for future
      subscriptions. One interesting note is that this replays from subscription
      to the *subject* Observable rather than the source Observable. If we
      didn't have a visualization for the subject (which creates a
      subscription), <code>output1</code> and <code>output2</code> would emit
      the same as <code>input</code> other than the initial delays.
    </p>
    <p>
      The replayed values are emitted all at once. The only difference from
      <a routerLink="/share"><code>share</code></a> is that
      <code>shareReplay</code> can replay values. <code>share</code> does not
      replay any values. <code>shareReplay()</code> will replay
      <em>all</em> values.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="subject"></marble>
    <marble [source]="output1"></marble> <marble [source]="output2"></marble>
  `,
})
export class RxShareReplayComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(6));
  subject = this.input.pipe(shareReplay(2));
  output1 = timer(2000).pipe(mergeMapTo(this.subject));
  output2 = timer(4000).pipe(mergeMapTo(this.subject));
}
