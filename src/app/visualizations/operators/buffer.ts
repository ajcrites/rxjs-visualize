import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';
import { buffer, mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'rx-buffer',
  template: `
    <h1>buffer</h1>
    <p>
      This is useful if you want to only emit aggregated values based on another
      event stream, i.e. the buffer Observable.
    </p>
    <p>
      It seems that <code>buffer</code> uses an Observable rather than a
      function that returns an observable because there is no way for it to get
      information from the source, i.e. it does not emit until the buffer
      Observable emits. Compare to <code>audit</code>, which takes a function
      that takes the source emission and returns an Observable.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="preBuffer"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      [source]="buffer"
      [main]="preBuffer"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="postBuffer"></rxjs-visualize-marble>
  `,
})
export class RxBufferComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  preBuffer = timer(0, 1000).pipe(take(20));
  buffer = interval(3000).pipe(mapTo('B'));
  postBuffer = this.preBuffer.pipe(buffer(this.buffer));
}
