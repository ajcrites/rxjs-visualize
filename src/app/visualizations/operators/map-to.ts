import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, mapTo } from 'rxjs/operators';

@Component({
  selector: 'rx-map-to',
  template: `
    <h1>Map To</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxMapToComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(take(5));
  output = this.input.pipe(mapTo('a'));
}
