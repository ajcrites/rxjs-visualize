import { Component } from '@angular/core';
import { animationFrameScheduler, timer } from 'rxjs';
import { observeOn, take } from 'rxjs/operators';

@Component({
  selector: 'rx-observe-on',
  template: `
    <h1>observeOn</h1>
    <p>
      This allows you to change the scheduler used for a source Observable for
      another Observable. I don't understand schedulers well, and they're not
      well-documented, so this example is pretty limited.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxObserveOnComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(5));
  output = this.input.pipe(observeOn(animationFrameScheduler, 100));
}
