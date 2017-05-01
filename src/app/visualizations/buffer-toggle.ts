import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/bufferToggle';

@Component({
  selector: 'rx-buffer-toggle',
  template: `
    <marble [source$]="preBuffer$"></marble>
    <marble [source$]="openBuffer$" [main$]="preBuffer$" [color]="'blue'"></marble>
    <marble [source$]="closeBuffer$" [color]="'blue'"></marble>
    <h2>Buffer Toggle</h2>
    <marble [source$]="postBuffer$"></marble>
  `,
})
export class RxBufferToggleComponent {
  preBuffer$ = Observable.interval(1000).take(20);
  openBuffer$ = Observable.interval(4250).mapTo('o');
  closeBuffer$ = new Subject;
  postBuffer$ = this.preBuffer$.bufferToggle(this.openBuffer$, (i: any) => {
    const closingObservable = Observable.interval(1750).take(1).do(() => this.closeBuffer$.next('c'));
    return closingObservable;
  });
}
