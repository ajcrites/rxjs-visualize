import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { dematerialize, map, materialize } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-dematerialize',
  template: `
    <h1>dematerialize</h1>
    <p>
      This is for working with Notifications which are objects that have a value
      and associated metadata. <code>dematerialize</code> takes emitted
      Notifications and converts them to values.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      [source]="materializedDisplay"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="dematerialized"></rxjs-visualize-marble>
  `,
})
export class RxDematerializeComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    mapNumberToChar(),
    map(val => {
      if (val === 'e') {
        throw new Error();
      }

      return val;
    }),
  );
  // Emit Notifications.
  materialized = this.input.pipe(materialize());
  materializedDisplay = this.materialized.pipe(map(({ value }) => value));
  dematerialized = this.materialized.pipe(dematerialize());
}
