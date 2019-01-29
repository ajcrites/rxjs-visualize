import { Component } from '@angular/core';

import { timer, interval } from 'rxjs';
import { windowWhen, map, take, mapTo, mergeAll } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-window-when',
  template: `
    <h1>windowWhen</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="output"></marble>
  `,
})
export class RxWindowWhenComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  // I don't understand this one fully
  input = timer(0, 1000).pipe(
    mapNumberToChar(),
    take(20),
  );
  output = this.input.pipe(
    windowWhen(() => interval(2500)),
    map(win => win.pipe(take(2))),
    mergeAll(),
  );
}
