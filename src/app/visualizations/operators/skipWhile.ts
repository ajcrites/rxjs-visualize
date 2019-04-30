import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators';

@Component({
  selector: 'rx-skip-while',
  template: `
    <h1>skipWhile</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxSkipWhileComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(6));
  output = this.input.pipe(skipWhile(val => val !== 3));
}
