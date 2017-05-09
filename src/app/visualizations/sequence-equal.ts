import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/sequenceEqual';

@Component({
  selector: 'rx-sequence-equal',
  template: `
    <marble [source$]="compare$"></marble>
    <marble [source$]="compareTo$"></marble>
    <h2>Sequence Equal</h2>
    <marble [source$]="output$" [color]="'green'"></marble>
  `
})
export class RxSequenceEqualComponent {
  compare$ = Observable.interval(1000).take(5);
  compareTo$ = Observable.interval(1200).take(5);
  output$ = this.compare$.sequenceEqual(this.compareTo$);
}

