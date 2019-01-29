import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { elementAt, take } from 'rxjs/operators';

@Component({
  selector: 'rx-element-at',
  template: `
    <h1>elementAt</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="elementAt"></marble>
    <marble [source]="elementAtUnknown"></marble>
  `,
})
export class RxElementAtComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(5));
  elementAt = this.input.pipe(elementAt(2));
  elementAtUnknown = this.input.pipe(elementAt<number | string>(21, 'n'));
}
