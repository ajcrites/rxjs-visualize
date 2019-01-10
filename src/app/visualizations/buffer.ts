import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, mapTo, buffer } from 'rxjs/operators';

@Component({
  selector: 'rx-buffer',
  template: `
    <h1>Buffer</h1>
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
    <pre>
      preBuffer = Observable.interval(1000).take(20);
      buffer = Observable.interval(3000).mapTo('B');
      postBuffer = this.preBuffer.buffer(this.buffer);
    </pre
    >

    <marble [source]="preBuffer"></marble> <marble [source]="buffer"></marble>
    <marble [source]="postBuffer"></marble>
  `,
})
export class RxBufferComponent {
  preBuffer = interval(1000).pipe(take(20));
  buffer = interval(3000).pipe(mapTo('B'));
  postBuffer = this.preBuffer.pipe(buffer(this.buffer));
}
