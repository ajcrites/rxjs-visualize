import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { window, map, take, mapTo, mergeAll } from 'rxjs/operators';

import { mapNumberToChar } from 'src/app/mapNumberToChar';

@Component({
  selector: 'rx-window',
  template: `
    <marble [source]="input"></marble>
    <marble [source]="notifier" [main]="input" color="blue"></marble>
    <h2>Window</h2>
    <marble [source]="output"></marble>
  `,
})
export class RxWindowComponent {
  input = interval(1000).pipe(
    mapNumberToChar(),
    take(10),
  );
  notifier = interval(3500).pipe(mapTo('w'));
  output = this.input.pipe(
    window(this.notifier),
    map(win => win.pipe(take(2))),
    mergeAll(),
  );
}
