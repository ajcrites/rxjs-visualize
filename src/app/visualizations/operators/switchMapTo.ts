import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { switchMapTo, mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'rx-switch-map-to',
  template: `
    <h1>switchMapTo</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="higherOrder"></marble> <marble [source]="inner"></marble>
    <marble [source]="firstOrder"></marble>
  `,
})
export class RxSwitchMapToComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  higherOrder = timer(0, 2000).pipe(
    take(4),
    mapTo('a'),
  );
  inner = timer(0, 1000).pipe(take(3));
  firstOrder = this.higherOrder.pipe(switchMapTo(this.inner));
}
