import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, shareReplay, mergeMapTo, tap } from 'rxjs/operators';

@Component({
  selector: 'rx-share-replay',
  template: `
    <h1>shareReplay</h1>
    <p>
      This will replay the provided number of emissions for future
      subscriptions. One interesting note is that this replays from subscription
      to the *subject* Observable rather than the source Observable. If we
      didn't have a visualization for the subject (which creates a
      subscription), <code>delayedOutput</code> would emit the same as
      <code>input</code> other than the initial delay.
    </p>
    <p>
      Notice how the logs only output twice. These are from the subscriptions
      that happen for <code>input</code> and <code>subject</code>.
      <code>delayedOutput</code>, since it's subscribing to our subject, does
      not output a log.
    </p>
    <p>
      The replayed values are emitted all at once. It's hard to see because the
      marbles overlap. The only difference from
      <a routerLink="/share"><code>share</code></a> is that
      <code>shareReplay</code> can replay values. <code>share</code> does not
      replay any values. <code>shareReplay</code> will replay
      <em>all</em> values.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="subject"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="delayedOutput"></rxjs-visualize-marble>
  `,
})
export class RxShareReplayComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;
  input = timer(0, 1000).pipe(
    take(4),
    // tslint:disable-next-line:no-console ... open your console!
    tap(val => val === 0 && console.log('new producer created!')),
  );
  subject = this.input.pipe(shareReplay(2));
  delayedOutput = timer(2000).pipe(mergeMapTo(this.subject));
}
