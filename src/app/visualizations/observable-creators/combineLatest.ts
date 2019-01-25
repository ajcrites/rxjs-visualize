import { Component } from '@angular/core';

import { combineLatest, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'rx-combine-latest',
  template: `
    <h1>combineLatest</h1>
    <p>
      Similar to <code>zip</code> except this will emit <em>any</em> a source
      emits rather than just when all sources have had a corresponding emission.
      <code>combineLatest</code> will not start emitting unless all of its
      sources have emitted at least once.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble *ngFor="let input of inputs" [source]="input"></marble>
    <marble [source]="combined" color="blue"></marble>
  `,
})
export class RxCombineLatestComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  inputs = [
    interval(1000).pipe(take(7)),
    interval(1300).pipe(take(5)),
    interval(1800).pipe(take(3)),
  ];
  combined = combineLatest(...this.inputs);
}
