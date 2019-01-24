import { Component } from '@angular/core';

import { fromEvent, timer } from 'rxjs';
import { takeUntil, throwIfEmpty, mapTo } from 'rxjs/operators';

@Component({
  selector: 'rx-from-event',
  template: `
    <h1>fromEvent</h1>
    <p>You have ten seconds to click anywhere and trigger some emissions!</p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="timeout"></marble>
    <marble color="green" [source]="clicks" [main]="timeout"></marble>
  `,
})
export class RxFromEventComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  timeout = timer(10000).pipe(mapTo('done'));
  clicks = fromEvent(document, 'click').pipe(
    takeUntil(this.timeout),
    mapTo('c'),
    throwIfEmpty(),
  );
}
