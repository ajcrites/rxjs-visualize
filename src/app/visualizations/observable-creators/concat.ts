import { Component } from '@angular/core';

import { concat, interval } from 'rxjs';
import { delay, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-concat',
  template: `
    <h1>concat</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble *ngFor="let input of inputs" [source]="input"></marble>
    <marble [source]="output"></marble>
  `,
})
export class RxConcatComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  inputs = [
    interval(1000).pipe(take(5)),
    interval(1000).pipe(
      delay(500),
      mapNumberToChar(),
      take(5),
    ),
  ];
  output = concat(...this.inputs);
}
