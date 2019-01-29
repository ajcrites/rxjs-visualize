import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { takeUntil, mapTo, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-take-until',
  template: `
    <h1>takeUntil</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble>
    <marble [source]="notifier" color="green"></marble>
    <marble [source]="output"></marble>
  `,
})
export class RxTakeUntilComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    mapNumberToChar(),
    take(7),
  );
  notifier = timer(0, 4500).pipe(
    mapTo('z'),
    take(1),
  );
  output = this.input.pipe(takeUntil(this.notifier));
}
