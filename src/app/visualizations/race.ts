import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { take, skip, map, race } from 'rxjs/operators';

@Component({
  selector: 'rx-race',
  template: `
    <h1>Race</h1>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="faster"></marble> <marble [source]="slower"></marble>
    <marble [source]="output"></marble>
  `,
})
export class RxRaceComponent {
  code = preval`module.exports = require('./codefile')(__filename)`;

  faster = interval(1000).pipe(
    take(5),
    map(val => 'a' + val),
  );
  slower = interval(800).pipe(
    skip(1),
    take(5),
    map(val => 'b' + val),
  );
  output = this.faster.pipe(race(this.slower));
}
