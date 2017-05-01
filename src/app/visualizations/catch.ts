import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'rx-catch',
  template: `
    <marble [source$]="preCatch$"></marble>
    <marble [source$]="postCatch$"></marble>
    <h2>Catch</h2>
    <marble [source$]="caught$"></marble>
  `,
})
export class RxCatchComponent {
  preCatch$ = Observable.interval(1000).map(i => {
    if (4 === i) {
      throw Error;
    }
    return String.fromCharCode(i + 97);
  });
  postCatch$ = new Subject;
  caught$ = this.preCatch$.catch((err, caught) =>
    Observable.interval(1000).take(15).map(value => value + 1).do(
      value => this.postCatch$.next(value)
    )
  );
}
