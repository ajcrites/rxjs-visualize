import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, partition } from 'rxjs/operators';

@Component({
  selector: 'rx-partition',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Partition</h2>
    <marble [source$]="satisfies$"></marble>
    <marble [source$]="doesNotSatisfy$"></marble>
  `,
})
export class RxPartitionComponent {
  input$ = interval(1000).pipe(take(20));
  partitioned = partition((val: number) => !!(val % 2))(this.input$);
  satisfies$ = this.partitioned[0];
  doesNotSatisfy$ = this.partitioned[1];
}
