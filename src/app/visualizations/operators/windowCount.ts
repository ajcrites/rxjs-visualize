import { Component } from '@angular/core';

import { Observable, timer } from 'rxjs';
import { windowCount, take, tap, mergeAll } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-window-count',
  template: `
    <h1>windowCount</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      *ngFor="let source of windows"
      [initTime]="initTime"
      [source]="source"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxWindowCountComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  initTime = new Date().getTime();
  input = timer(0, 1000).pipe(
    mapNumberToChar(),
    take(10),
  );
  windows: Observable<string>[] = [];
  output = this.input.pipe(
    windowCount(2),
    tap(win => this.windows.push(win)),
    mergeAll(),
  );
}
