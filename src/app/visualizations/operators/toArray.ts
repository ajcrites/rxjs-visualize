import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'rx-to-array',
  template: `
    <h1>toArray</h1>
    <p>
      Emits values on source completion as an array. This does not convert an
      Observable to array. You still have to subscribe to the Observable to get
      the emitted array value.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxToArrayComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(2));
  output = this.input.pipe(toArray());
}
