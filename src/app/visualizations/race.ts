import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/race';

@Component({
  selector: 'rx-race',
  template: `
    <marble [source$]="faster$"></marble>
    <marble [source$]="slower$"></marble>
    <h2>Race</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxRaceComponent {
  faster$ = Observable.interval(1000).take(5).map(val => 'a' + val);
  slower$ = Observable.interval(800).skip(1).take(5).map(val => 'b' + val);
  output$ = this.faster$.race(this.slower$);
}

