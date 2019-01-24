import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { windowCount, take, tap, mergeAll } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-window-count',
  template: `
    <h1>Window Count</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble>
    <marble
      *ngFor="let source of windows"
      [initTime]="initTime"
      [source]="source"
    ></marble>
    <marble [source]="output"></marble>
  `,
})
export class RxWindowCountComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  initTime = new Date().getTime();
  input = interval(1000).pipe(
    mapNumberToChar(),
    take(10),
  );
  windows = [];
  output = this.input.pipe(
    windowCount(2),
    tap(win => this.windows.push(win)),
    mergeAll(),
  );
}
