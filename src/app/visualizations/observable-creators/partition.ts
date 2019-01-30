import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { take, partition } from 'rxjs/operators';

@Component({
  selector: 'rx-partition',
  template: `
    <h1>partition</h1>
    <p>
      The official documentation lists this as an operator, but it is actually
      an Observable creator. See:
      <a href="https://github.com/ReactiveX/rxjs/issues/4419">
        https://github.com/ReactiveX/rxjs/issues/4419</a
      >.
    </p>

    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble> <marble [source]="satisfies"></marble>
    <marble [source]="doesNotSatisfy"></marble>
  `,
})
export class RxPartitionComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(20));
  partitioned = partition((val: number) => !!(val % 2))(this.input);
  satisfies = this.partitioned[0];
  doesNotSatisfy = this.partitioned[1];
}
