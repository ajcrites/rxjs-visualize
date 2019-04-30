import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { mergeMapTo, shareReplay, take } from 'rxjs/operators';

@Component({
  selector: 'rx-share-replay',
  template: `
    <h1>shareReplay</h1>
    <p>
      This will replay the provided number of emissions for future
      subscriptions. One interesting note is that this replays from subscription
      to the *subject* Observable rather than the source Observable. If we
      didn't have a visualization for the subject (which creates a
      subscription), <code>output</code> would emit the same as
      <code>input</code> other than the initial delay.
    </p>
    <p>
      The replayed values are emitted all at once. The only difference from
      <a routerLink="/share"><code>share</code></a> is that
      <code>shareReplay</code> can replay values. <code>share</code> does not
      replay any values. <code>shareReplay()</code> will replay
      <em>all</em> values.
    </p>
    <p>
      This visualization doesn't really show off the
      <code>share</code> capabilities and can probably be improved. See the
      <a routerLink="/share"><code>share</code></a> visualization to see what I
      mean.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="subject"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxShareReplayComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(4));
  subject = this.input.pipe(shareReplay(2));
  output = timer(3500).pipe(mergeMapTo(this.subject));
}
