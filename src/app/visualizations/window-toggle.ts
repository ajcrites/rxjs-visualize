import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { windowToggle, take, mapTo, mergeAll } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-window-toggle',
  template: `
    <h1>Window Toggle</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble>
    <marble [source]="notifier" [main]="input" color="blue"></marble>
    <marble [source]="output"></marble>
  `,
})
export class RxWindowToggleComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  input = interval(1000).pipe(
    mapNumberToChar(),
    take(20),
  );
  notifier = interval(3500).pipe(mapTo('w'));
  output = this.input.pipe(
    windowToggle(this.notifier, () => interval(2000)),
    mergeAll(),
  );
}
