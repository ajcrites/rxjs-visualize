import { Component } from '@angular/core';

import { timer, EMPTY } from 'rxjs';
import { delay, take, map, isEmpty } from 'rxjs/operators';

@Component({
  selector: 'rx-is-empty',
  template: `
    <h1>isEmpty</h1>
    <p>
      This will emit immediately and complete if the source emits. If the source
      completes without emitting, this emits <code>false</code>.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="notEmpty"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="yesEmpty"></rxjs-visualize-marble>
  `,
})
export class RxIsEmptyComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(2));
  notEmpty = this.input.pipe(
    isEmpty(),
    map(Number),
  );
  yesEmpty = EMPTY.pipe(
    delay(1000),
    isEmpty(),
    map(Number),
  );
}
