import { Component } from '@angular/core';

import { timer } from 'rxjs';
import { delayWhen, take, mapTo } from 'rxjs/operators';

@Component({
  selector: 'rx-delay-when',
  template: `
    <h1>delayWhen</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      *ngFor="let source of delays"
      [initTime]="initTime"
      [source]="source"
    ></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="delayed"></rxjs-visualize-marble>
  `,
})
export class RxDelayWhenComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  initTime = new Date().getTime();
  input = timer(0, 1000).pipe(take(5));
  // This is used to display the five delay Observables. It does not have any
  // impact on the output.
  delays = [];
  // Note that `val` (the number) is emitted, not `'d'`
  delayed = this.input.pipe(
    delayWhen(val => {
      const obs = timer(val * 1000).pipe(mapTo('d'));
      this.delays.push(obs);
      return obs;
    }),
  );
}
