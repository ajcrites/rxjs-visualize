import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/buffer';

@Component({
  selector: 'rx-buffer',
  template: `
    <h1><a href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-buffer">
      Buffer
    </a></h1>
    <p>
      This is useful if you want to only emit aggregated values based on another
      event stream, i.e. the buffer Observable.
    </p>
    <p>
      It seems that <code>buffer</code> uses an Observable rather than a
      function that returns an observable because there is no way for it to
      get information from the source, i.e. it does not emit until the buffer
      Observable emits. Compare to <code>audit</code>, which takes a function
      that takes the source emission and returns an Observable.
    </p>
    <pre>
      preBuffer$ = Observable.interval(1000).take(20);
      buffer$ = Observable.interval(3000).mapTo('B');
      postBuffer$ = this.preBuffer$.buffer(this.buffer$);
    </pre>

    <marble [source$]="preBuffer$"></marble>
    <marble [source$]="buffer$"></marble>
    <marble [source$]="postBuffer$"></marble>
  `,
})
export class RxBufferComponent {
  preBuffer$ = Observable.interval(1000).take(20);
  buffer$ = Observable.interval(3000).mapTo('B');
  postBuffer$ = this.preBuffer$.buffer(this.buffer$);
}
