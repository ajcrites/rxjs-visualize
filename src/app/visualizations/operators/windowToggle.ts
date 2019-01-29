import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { windowToggle, take, mapTo, mergeAll } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-window-toggle',
  template: `
    <h1>windowToggle</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble>
    <marble [source]="notifier" [main]="input" color="blue"></marble>
    <marble [source]="output"></marble>
  `,
})
export class RxWindowToggleComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    mapNumberToChar(),
    take(20),
  );
  notifier = timer(0, 3500).pipe(mapTo('w'));
  output = this.input.pipe(
    windowToggle(this.notifier, () => timer(2000)),
    mergeAll(),
  );
}
