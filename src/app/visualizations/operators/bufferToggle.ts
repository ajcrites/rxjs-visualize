import { Component } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { bufferToggle, mapTo, take, tap } from 'rxjs/operators';

@Component({
  selector: 'rx-buffer-toggle',
  template: `
    <h1>bufferToggle</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="preBuffer"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      [source]="openBuffer"
      [main]="preBuffer"
      color="blue"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble
      [source]="closeBuffer"
      [main]="preBuffer"
      color="blue"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="postBuffer"></rxjs-visualize-marble>
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
