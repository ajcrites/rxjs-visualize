import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, bufferCount } from 'rxjs/operators';

@Component({
  selector: 'rx-buffer-count',
  template: `
    <h1>bufferCount</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="preBuffer"></marble>
    <marble [source]="postBuffer"></marble>
  `,
})
export class RxBufferCountComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  preBuffer = timer(0, 1000).pipe(take(20));
  postBuffer = this.preBuffer.pipe(bufferCount(3));
}
