import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { window, map, take, mapTo, mergeAll } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-window',
  template: `
    <h1>window</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble>
    <marble [source]="notifier" [main]="input" color="blue"></marble>
    <marble [source]="output"></marble>
  `,
})
export class RxWindowComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    mapNumberToChar(),
    take(10),
  );
  notifier = timer(0, 3500).pipe(mapTo('w'));
  output = this.input.pipe(
    // this could be `windowTime(3500)`
    window(this.notifier),
    map(win => win.pipe(take(2))),
    mergeAll(),
  );
}
