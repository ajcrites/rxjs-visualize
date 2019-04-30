import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NEVER, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface MarbleIcon {
  value: string | number;
  left: number;
}

@Component({
  animations: [
    trigger('appear', [
      state(
        'in',
        style({
          transform: 'scale(1)',
          opacity: 1,
        }),
      ),
      transition('void => *', [
        style({
          transform: 'scale(0.2)',
          opacity: 0.2,
        }),
        animate(100),
        style({
          transform: 'scale(1.5)',
        }),
        animate(100),
      ]),
    ]),
  ],

  selector: 'rxjs-visualize-marble',
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
      class="marble"
      [ngClass]="color"
      >{{ elem.value }}</i
    >
  `,
})
export class RxjsVisualizeMarbleComponent implements OnInit, OnDestroy {
  // Source Observable for the marble diagram
  @Input() source: Observable<string | number>;

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

  sourceValues: MarbleIcon[] = [];
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
