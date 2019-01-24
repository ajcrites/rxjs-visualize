import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { windowWhen, map, take, mapTo, mergeAll } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-window-when',
  template: `
    <h1>Window When</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble>
    <marble [source]="notifier" [main]="input" color="blue"></marble>
    <marble [source]="output"></marble>
  `,
})
export class RxWindowWhenComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  // I don't understand this one fully
  input = interval(1000).pipe(
    mapNumberToChar(),
    take(10),
  );
  notifier = interval(2500).pipe(mapTo('w'));
  output = this.input.pipe(
    windowWhen(() => interval(2500)),
    map(win => win.pipe(take(2))),
    mergeAll(),
  );
}
