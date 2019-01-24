import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { takeUntil, mapTo, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-take-until',
  template: `
    <h1>Take Until</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble>
    <marble [source]="notifier" color="green"></marble>
    <marble [source]="output"></marble>
  `,
})
export class RxTakeUntilComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
    mapNumberToChar(),
    take(7),
  );
  notifier = interval(4500).pipe(
    mapTo('z'),
    take(1),
  );
  output = this.input.pipe(takeUntil(this.notifier));
}
