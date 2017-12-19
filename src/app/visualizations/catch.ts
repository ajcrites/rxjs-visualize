import { readFileSync } from 'fs';

import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'rx-catch',
  template: `
    <pre prism-highlight="typescript">${readFileSync(__filename).toString().replace(/[\s\S]*export class[\s\S]*?{([\s\S]*)}/, '$1').replace(/{/g, "{{ '{' }}")}</pre>
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
  preCatch$ = Observable.interval(1000).map(i => {
    if (4 === i) {
      throw Error;
    }
    return String.fromCharCode(i + 97);
  });
  postCatch$ = new Subject;
  caught$ = this.preCatch$.catch(() =>
    Observable.interval(1000).take(15).map(value => value + 1).do(
      value => this.postCatch$.next(value)
    )
  );

}

