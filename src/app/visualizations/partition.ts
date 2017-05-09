import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/partition';

@Component({
  selector: 'rx-partition',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Partition</h2>
    <marble [source$]="satisfies$"></marble>
    <marble [source$]="doesNotSatisfy$"></marble>
  `
})
export class RxPartitionComponent {
  input$ = Observable.interval(1000).take(20);
  partitioned = this.input$.partition(val => !!(val % 2));
  satisfies$ = this.partitioned[0];
  doesNotSatisfy$ = this.partitioned[1];
}
