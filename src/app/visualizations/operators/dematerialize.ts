import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { materialize, dematerialize, map } from 'rxjs/operators';

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

    <marble [source]="input"></marble>
    <marble [source]="materializedDisplay"></marble>
    <marble [source]="dematerialized"></marble>
  `,
})
export class RxDematerializeComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = interval(1000).pipe(
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
