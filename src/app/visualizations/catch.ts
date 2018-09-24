import { readFileSync } from 'fs';

import { Component } from '@angular/core';

import { interval, Subject } from 'rxjs';
import { tap, take, map, catchError } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-catch',
  template: `
    <pre prism-highlight="typescript">${readFileSync(__filename)
      .toString()
      .replace(/[\s\S]*export class[\s\S]*?{([\s\S]*)}/, '$1')
      .replace(/{/g, '{{ \'{\' }}')}</pre>
    <h1><a href="http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-catch">
      Catch
    </a></h1>

    <marble [source$]="preCatch$"></marble>
    <marble [source$]="postCatch$"></marble>
    <marble [source$]="caught$"></marble>
  `,
})
export class RxCatchComponent {
  // Throw an error on the 5th emission. Then, create a new observable
  // and keep going. This also switches letters to numbers; it essentially
  // mirrors the example from the ReactiveX docs
  preCatch$ = interval(1000).pipe(
    map(i => {
      if (4 === i) {
        throw Error;
      }
      return i;
    }),
    mapNumberToChar(),
  );
  postCatch$ = new Subject();
  caught$ = this.preCatch$.pipe(
    catchError(() =>
      interval(1000).pipe(
        take(15),
        map(value => value + 1),
        tap(value => this.postCatch$.next(value)),
      ),
    ),
  );
}
