import { Component, Input, OnInit } from '@angular/core';
import { animations } from './visualizations.animations';

import { never } from 'rxjs/observable/never';

@Component({
  animations,
  // tslint:disable-next-line: component-selector
  selector: 'marble',
  template: `
    <i [@appear] *ngFor="let elem of source;" [style.left.px]="elem.left"
      [style.top.px]="elem.top"
      [class]="color">{{ elem.value }}</i>
  `,
})
// tslint:disable-next-line:component-class-suffix
export class Marble implements OnInit {
  source = [];
  // Source Observable for the marble diagram
  @Input() source$;

  // Main Observable for the example. When it completes, stop the source
  // This is only needed if the source will not stop on its own in a
  // reasonable way
  @Input() main$ = never();

  // Force color to simplify tracking of some inputs
  @Input() color;

  // Specify the initial time of the observable to force it to the right based
  // on a separate time metric. If none is provided, start it at the very left
  // (init time when the marble diagram starts emitting)
  @Input() initTime = new Date().getTime();

  @Input() leftPad = 45;

  ngOnInit() {
    const initTime = this.initTime;
    const sourceSubscription = this.source$.subscribe(value => {
      this.source.push({
        value,
        left: (new Date().getTime() - initTime) / 1000 * this.leftPad,
      });

      const sourcesLength = this.source.length;
      // TODO improve this to handle more than one overlap
      if (
        sourcesLength > 1 &&
        this.source[sourcesLength - 1].left -
          this.source[sourcesLength - 2].left <
          30 &&
        !this.source[sourcesLength - 2].top
      ) {
        this.source[sourcesLength - 1].top = 30;
      }
    });

    this.main$.subscribe(null, null, () => sourceSubscription.unsubscribe());
  }
}
