import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, mapTo } from 'rxjs/operators';

@Component({
  selector: 'rx-map-to',
  template: `
    <h1>mapTo</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxMapToComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(5));
  output = this.input.pipe(mapTo('a'));
}
