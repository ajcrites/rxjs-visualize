import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/merge';

@Component({
  selector: 'rx-merge',
  template: `
    <marble [source$]="first$"></marble>
    <marble [source$]="second$"></marble>
    <h2>Merge</h2>
    <marble [source$]="merged$"></marble>
  `
})
export class RxMergeComponent {
  first$ = Observable.interval(1000).take(10).map(count => String.fromCharCode(count + 97));
  second$ = Observable.interval(1000).delay(500).take(10);
  merged$ = this.first$.merge(this.second$);
}
