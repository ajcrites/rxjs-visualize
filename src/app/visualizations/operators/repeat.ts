import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { repeat, take } from 'rxjs/operators';

@Component({
  selector: 'rx-repeat',
  template: `
    <h1>repeat</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxRepeatComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(3));
  output = this.input.pipe(repeat(3));
}
