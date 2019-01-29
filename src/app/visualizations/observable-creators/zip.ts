import { Component } from '@angular/core';

import { zip, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'rx-zip',
  template: `
    <h1>zip</h1>
    <p>
      Similar to <code>merge</code> and <code>combineLatest</code>. The key
      difference is that <code>zip</code> will only emit when all of its sources
      have emitted since the last time <code>zip</code> emitted, and those
      values are emitted.
    </p>
    <p>
      Correspondingly, <code>zip</code> will complete when any of its sources
      complete.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble *ngFor="let input of inputs" [source]="input"></marble>
    <marble [source]="zipped" color="blue"></marble>
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
