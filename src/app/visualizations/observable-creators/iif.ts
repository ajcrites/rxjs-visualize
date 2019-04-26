import { Component } from '@angular/core';
import { iif, timer } from 'rxjs';
import { mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'rx-iif',
  template: `
    <h1>iif</h1>
    <p>
      <code>if</code> is a reserved word or else this would probaby just be
      <code>if</code>. I'm not sure that the extra i represents anything. It's
      just easier to type.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="t" color="green"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="f" color="blue"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="meetsCondition"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      [source]="doesNotMeetCondition"
    ></rxjs-visualize-marble>
  `,
})
export class RxIifComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  t = timer(0, 1000).pipe(
    mapTo('T'),
    take(5),
  );
  f = timer(0, 1000).pipe(
    mapTo('F'),
    take(5),
  );
  meetsCondition = iif(() => true, this.t, this.f);
  doesNotMeetCondition = iif(() => false, this.t, this.f);
}
