import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, timestamp, pluck, map } from 'rxjs/operators';

@Component({
  selector: 'rx-timestamp',
  template: `
    <h1>timestamp</h1>
    <p>Similar to <code>timeInterval</code>.</p>
    <p>
      Emits the actual timestamp of each emission. This is provided as an object
      with
      <code prism-highlight="typescript">{{ '{' }} value, timestamp }</code>
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="intervals"></marble>
    <marble [source]="values"></marble>
  `,
})
export class RxTimestampComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 950).pipe(take(20));
  // not shown
  timestamps = this.input.pipe(timestamp());
  intervals = this.timestamps.pipe(
    pluck('timestamp'),
    map((timestamp: number) => new Date(timestamp).getSeconds() + 's'),
  );
  values = this.timestamps.pipe(pluck('value'));
}
