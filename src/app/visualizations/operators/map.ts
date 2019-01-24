import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'rx-map',
  template: `
    <h1>map</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxMapComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(take(20));
  output = this.input.pipe(map(val => val * 10));
}
