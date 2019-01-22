import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { delayWhen, take, mapTo } from 'rxjs/operators';

@Component({
  selector: 'rx-delay-when',
  template: `
    <h1>Delay</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="input"></marble>
    <marble
      *ngFor="let source of delays"
      [initTime]="initTime"
      [source]="source"
    ></marble>
    <marble [source]="delayed"></marble>
  `,
})
export class RxDelayWhenComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  initTime = new Date().getTime();
  delays = [];
  input = interval(1000).pipe(take(5));
  delayed = this.input.pipe(
    delayWhen(val => {
      const obs = interval(val * 1000).pipe(
        take(1),
        mapTo(val),
      );
      this.delays.push(obs);
      return obs;
    }),
  );
}
