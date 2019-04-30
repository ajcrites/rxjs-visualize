import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { mapTo, take, takeUntil } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-take-until',
  template: `
    <h1>takeUntil</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      [source]="notifier"
      color="green"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxTakeUntilComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    mapNumberToChar(),
    take(7),
  );
  notifier = timer(3500).pipe(mapTo('z'));
  output = this.input.pipe(takeUntil(this.notifier));
}
