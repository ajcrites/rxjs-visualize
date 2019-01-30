import { Component } from '@angular/core';

import { timer, Subject } from 'rxjs';
import { tap, take, mapTo, bufferToggle } from 'rxjs/operators';

@Component({
  selector: 'rx-buffer-toggle',
  template: `
    <h1>bufferToggle</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="preBuffer"></marble>
    <marble [source]="openBuffer" [main]="preBuffer" color="blue"></marble>
    <marble [source]="closeBuffer" [main]="preBuffer" color="blue"></marble>
    <marble [source]="postBuffer"></marble>
  `,
})
export class RxBufferToggleComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  preBuffer = timer(0, 1000).pipe(take(20));
  openBuffer = timer(0, 4250).pipe(mapTo('o'));
  // Used for displaying when the closing buffer is triggered, but does not
  // impact the output observable
  closeBuffer = new Subject();
  postBuffer = this.preBuffer.pipe(
    bufferToggle(this.openBuffer, () =>
      timer(1750).pipe(tap(() => this.closeBuffer.next('c'))),
    ),
  );
}
