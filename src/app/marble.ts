import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { animations } from './visualizations.animations';

import { NEVER, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  animations,
  // tslint:disable-next-line: component-selector
  selector: 'marble',
  template: `
    <div
      class="guide"
      [class.complete]="complete"
      [class.error]="error"
      [style.width.px]="guideLength + (error || complete ? 15 : 0)"
      [style.left.px]="leftPad - 35"
    ></div>
    <i
      [@appear]
      *ngFor="let elem of sourceValues"
      [style.left.px]="elem.left"
      [class]="color"
      >{{ elem.value }}</i
    >
  `,
})
// tslint:disable-next-line:component-class-suffix
export class Marble implements OnInit, OnDestroy {
  // Source Observable for the marble diagram
  @Input() source;

  // Main Observable for the example. When it completes, stop the source
  // This is only needed if the source will not stop on its own in a
  // reasonable way
  @Input() main = NEVER;

  // Force color to simplify tracking of some inputs
  @Input() color = '';

  // Specify the initial time of the observable to force it to the right based
  // on a separate time metric. If none is provided, start it at the very left
  // (init time when the marble diagram starts emitting)
  @Input() initTime = new Date().getTime();

  @Input() leftPad = 45;

  sourceValues = [];
  // Source Observable has completed
  complete = false;
  // Source Observable encountered an error
  error = false;

  guideLength = 0;

  // clean up input Observables
  completer = new Subject();

  ngOnInit() {
    const initTime = this.initTime;
    this.source.pipe(takeUntil(this.completer)).subscribe({
      next: value => {
        const left =
          ((new Date().getTime() - initTime) / 1000) * this.leftPad + 20;
        this.sourceValues.push({
          value,
          left,
        });
        this.guideLength = left + 25;
      },
      error: () => (this.error = true),
      complete: () => (this.complete = true),
    });

    this.main.pipe(takeUntil(this.completer)).subscribe(null, null, () => {
      this.completer.next();
      this.completer.complete();
    });
  }

  ngOnDestroy() {
    this.completer.next();
    this.completer.complete();
  }
}
