import { Component } from '@angular/core';

import { ConnectableObservable, timer } from 'rxjs';
import { tap, take, publish } from 'rxjs/operators';

@Component({
  selector: 'rx-publish',
  template: `
    <h1>publish</h1>
    <p>
      The <code>publish</code> operators use
      <a routerLink="/multicast"><code>multicast</code></a> with various types
      of Subjects. This one, <code>publish</code>, uses
      <code prism-highlight="typescript">new Subject()</code>
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxPublishComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(
    take(20),
    tap(val => {
      if (5 === val) {
        this.output.connect();
      }
    }),
  );
  output = this.input.pipe(publish()) as ConnectableObservable<number>;
}
