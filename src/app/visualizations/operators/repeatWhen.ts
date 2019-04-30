// This one confuses me
import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';
import { mapTo, repeatWhen, take } from 'rxjs/operators';

@Component({
  selector: 'rx-repeat-when',
  template: `
    <h1>repeatWhen</h1>
    <p>
      This mirrors the source Observable <em>and</em> resubscribes to the source
      upon completion.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble
      [source]="input"
      color="yellow"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxRepeatWhenComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 3000).pipe(
    take(3),
    mapTo('r'),
  );
  // I'm not quite sure why this ends up emitting 5 additional times.
  output = this.input.pipe(repeatWhen(() => interval(1000).pipe(take(2))));
}
