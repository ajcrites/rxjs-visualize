import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { mapTo, mergeMapTo, take } from 'rxjs/operators';

@Component({
  selector: 'rx-merge-map-to',
  template: `
    <h1>mergeMapTo</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="higherOrder"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="inner"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="firstOrder"></rxjs-visualize-marble>
  `,
})
export class RxMergeMapToComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  higherOrder = timer(0, 1000).pipe(
    take(4),
    mapTo('a'),
  );
  inner = timer(0, 1000).pipe(take(3));
  firstOrder = this.higherOrder.pipe(mergeMapTo(this.inner));
}
