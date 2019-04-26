import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'rx-map-to',
  template: `
    <h1>mapTo</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="input"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="output"></rxjs-visualize-marble>
  `,
})
export class RxMapToComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  input = timer(0, 1000).pipe(take(5));
  output = this.input.pipe(mapTo('a'));
}
