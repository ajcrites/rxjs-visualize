import { Component } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { bufferWhen, take, tap } from 'rxjs/operators';

@Component({
  selector: 'rx-buffer-when',
  template: `
    <h1>bufferWhen</h1>
    <p>
      This is similar to <code>audit</code> except that it will collect
      <em>all</em> values until the next notifier Observable emission rather
      than just the last value.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="preBuffer"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      [source]="closingBuffer"
      [main]="preBuffer"
      color="blue"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="postBuffer"></rxjs-visualize-marble>
  `,
})
export class RxBufferWhenComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  preBuffer = timer(0, 1000).pipe(take(20));
  closingBuffer = new Subject();
  postBuffer = this.preBuffer.pipe(
    bufferWhen(() =>
      timer(1000 + Math.random() * 4000).pipe(
        tap(() => this.closingBuffer.next('s')),
      ),
    ),
  );
}
