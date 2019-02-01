import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { skipUntil, mapTo, take } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-skip-until',
  template: `
    <h1>skipUntil</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      [source]="stopSkipper"
      color="green"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxSkipUntilComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    take(5),
    mapNumberToChar(),
  );
  stopSkipper = timer(2400).pipe(mapTo('x'));
  output = this.input.pipe(skipUntil(this.stopSkipper));
}
