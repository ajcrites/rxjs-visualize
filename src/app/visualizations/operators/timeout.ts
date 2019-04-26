import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { filter, take, timeout } from 'rxjs/operators';

@Component({
  selector: 'rx-timeout',
  template: `
    <h1>timeout</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="checkFive"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxTimeoutComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(20));
  checkFive = this.input.pipe(filter(val => val > 5));
  output = this.checkFive.pipe(timeout(3000));
}
