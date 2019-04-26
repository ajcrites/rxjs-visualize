import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';
import { map, mergeAll, take, windowWhen } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-window-when',
  template: `
    <h1>windowWhen</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
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
