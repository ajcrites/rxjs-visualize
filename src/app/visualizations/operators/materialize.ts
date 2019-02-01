import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { materialize, map } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-materialize',
  template: `
    <h1>materialize</h1>
    <p>
      This is for working with Notifications which are objects that have a value
      and associated metadata. <code>Materialize</code> takes values and
      converts them into Notifications (adds the metadata).
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      [source]="materializedDisplay"
    ></rxjs-visualize-marble>
  `,
})
export class RxMaterializeComponent {
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
  // not shown
  materialized = this.input.pipe(materialize());
  materializedDisplay = this.materialized.pipe(map(({ value }) => value));
}
