import { Component } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { catchError, finalize, map, take, tap } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-catch-error',
  template: `
    <h1>catchError (formerly <code>.catch</code>)</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="preCatch"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="postCatch"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="caught"></rxjs-visualize-marble>
  `,
})
export class RxCatchErrorComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  // Throw an error on the 5th emission. Then, create a new observable
  // and keep going. This also switches letters to numbers.
  preCatch = timer(0, 1000).pipe(
    map(i => {
      if (4 === i) {
        throw Error;
      }
      return i;
    }),
    mapNumberToChar(),
  );
  postCatch = new Subject();
  caught = this.preCatch.pipe(
    catchError(() =>
      timer(0, 1000).pipe(
        take(15),
        map(value => value + 1),
        tap(value => this.postCatch.next(value)),
        finalize(() => this.postCatch.complete()),
      ),
    ),
  );
}
