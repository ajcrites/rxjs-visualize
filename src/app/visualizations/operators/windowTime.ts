import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { windowTime, map, take, mergeAll } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-window-time',
  template: `
    <h1>windowTime</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxWindowTimeComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    mapNumberToChar(),
    take(10),
  );
  output = this.input.pipe(
    windowTime(3500),
    map(win => win.pipe(take(2))),
    mergeAll(),
  );
}
