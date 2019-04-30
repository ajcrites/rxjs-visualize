import { Component } from '@angular/core';
import { ConnectableObservable, timer } from 'rxjs';
import { mergeMapTo, publishReplay, take, tap } from 'rxjs/operators';

@Component({
  selector: 'rx-publish-replay',
  template: `
    <h1>publishReplay</h1>
    <p>
      This is similar to <code>publish</code> except it emits a
      <code>ReplaySubject</code> mirroring the source.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="subject"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxPublishReplayComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    take(5),
    tap(val => {
      if (0 === val) {
        this.subject.connect();
      }
    }),
  );
  subject = this.input.pipe(publishReplay(2)) as ConnectableObservable<number>;
  // This skips over the 0th and 1th values since `publishReplay` will already
  // have bufferred three values. All replayed values are emitted
  // simultaneously which may be a bit tough to see, but they're there.
  output = timer(3500).pipe(mergeMapTo(this.subject));
}
