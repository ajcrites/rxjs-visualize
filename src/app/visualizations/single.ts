import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { single, take } from 'rxjs/operators';

import { mapNumberToChar } from '../mapNumberToChar';

@Component({
  selector: 'rx-single',
  template: `
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source$]="input$"></marble>
    <h2>Single</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxSingleComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;
  input$ = interval(1000).pipe(
    take(3),
    mapNumberToChar(),
  );
  output$ = this.input$.pipe(single(val => val === 'b'));
}
