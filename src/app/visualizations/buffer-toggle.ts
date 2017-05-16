import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/bufferToggle';

@Component({
  selector: 'rx-buffer-toggle',
  template: `
    <h1><a href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferToggle">
      Buffer Toggle
    </a></h1>
    <pre>
    preBuffer$ = Observable.interval(1000).take(20);
    openBuffer$ = Observable.interval(4250).mapTo('o');
    // Used for displaying when the closing buffer is triggered, but does not
    // impact the output observable
    closeBuffer$ = new Subject;
    postBuffer$ = this.preBuffer$.bufferToggle(this.openBuffer$, () => {{ '{' }}
      const closingObservable = Observable.interval(1750).take(1).do(() => this.closeBuffer$.next('c'));
      return closingObservable;
    });
    </pre>

    <marble [source$]="preBuffer$"></marble>
    <marble [source$]="openBuffer$" [main$]="preBuffer$" [color]="'blue'"></marble>
    <marble [source$]="closeBuffer$" [color]="'blue'"></marble>
    <marble [source$]="postBuffer$"></marble>
  `,
})
export class RxBufferToggleComponent {
  preBuffer$ = Observable.interval(1000).take(20);
  openBuffer$ = Observable.interval(4250).mapTo('o');
  // Used for displaying when the closing buffer is triggered, but does not
  // impact the output observable
  closeBuffer$ = new Subject;
  postBuffer$ = this.preBuffer$.bufferToggle(this.openBuffer$, () => {
    const closingObservable = Observable.interval(1750).take(1).do(() => this.closeBuffer$.next('c'));
    return closingObservable;
  });
}
