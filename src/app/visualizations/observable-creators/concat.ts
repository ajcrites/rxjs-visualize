import { Component } from '@angular/core';

import { concat, timer } from 'rxjs';
import { delay, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-concat',
  template: `
    <h1>concat</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble
      *ngFor="let input of inputs"
      [source]="input"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxConcatComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  inputs = [
    timer(0, 1000).pipe(take(5)),
    timer(0, 1000).pipe(
      delay(500),
      mapNumberToChar(),
      take(5),
    ),
  ];
  output = concat(...this.inputs);
}
