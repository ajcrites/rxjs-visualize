import { Component } from '@angular/core';
import { timer, zip } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'rx-zip',
  template: `
    <h1>zip</h1>
    <p>
      Similar to <code>merge</code> and <code>combineLatest</code>. The key
      difference is that <code>zip</code> will only emit when all of its sources
      have emitted since the last time <code>zip</code> emitted. For example,
      after Observable 1, 2, and 3 have emitted, then zip emits. It will not
      emit again until all of Observable 1, 2, and 3 have emitted again. It
      buffers emissions so that all corresponding emissions are provided in
      order. This also contrasts with <code>combineLatest</code>.
    </p>
    <p>
      Correspondingly, <code>zip</code> will complete when any of its sources
      completes.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble
      *ngFor="let input of inputs"
      [source]="input"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble
      [source]="zipped"
      color="blue"
    ></rxjs-visualize-marble>
  `,
})
export class RxZipComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  inputs = [
    timer(0, 1000).pipe(take(7)),
    timer(0, 1300).pipe(take(5)),
    timer(0, 1800).pipe(take(3)),
  ];
  zipped = zip(...this.inputs);
}
