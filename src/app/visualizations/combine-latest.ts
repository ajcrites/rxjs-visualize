import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/combineLatest';

@Component({
  selector: 'rx-combine-latest',
  template: `
    <marble [source$]="first$"></marble>
    <marble [source$]="second$"></marble>
    <h2>Combine Latest</h2>
    <marble [source$]="combined$"></marble>
  `
})
export class RxCombineLatestComponent {
  first$ = Observable.interval(1500).take(15).map(count => String.fromCharCode(count + 97));
  second$ = Observable.interval(1000).take(20);
  combined$ = this.first$.combineLatest(this.second$);
}
