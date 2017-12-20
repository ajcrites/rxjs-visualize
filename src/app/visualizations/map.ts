import { Component } from '@angular/core';

import { interval } from 'rxjs/observable/interval';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'rx-map',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Map</h2>
    <marble [source$]="output$"></marble>
  `,
})
export class RxMapComponent {
  input$ = interval(1000).pipe(take(20));
  output$ = this.input$.pipe(map(val => val * 10));
}
