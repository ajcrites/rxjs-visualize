import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { switchMapTo, mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'rx-switch-map-to',
  template: `
    <h1>Switch Map To</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="higherOrder"></marble> <marble [source]="inner"></marble>
    <marble [source]="firstOrder"></marble>
  `,
})
export class RxSwitchMapToComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  higherOrder = interval(2000).pipe(
    take(4),
    mapTo('a'),
  );
  inner = interval(1000).pipe(take(3));
  firstOrder = this.higherOrder.pipe(switchMapTo(this.inner));
}
