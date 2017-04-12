import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { animations } from './visualizations.animations';
import 'rxjs/add/observable/never';

@Component({
  selector: 'marble',
  template: `
    <i [@appear] *ngFor="let elem of source;" [style.left.px]="elem.left"
      [style.top.px]="elem.top"
      [class]="color">{{elem.value}}</i>
  `,
  animations,
})
export class Marble implements OnInit {
  source = [];
  // Source Observable for the marble diagram
  @Input() source$;

  // Main Observable for the example. When it completes, stop the source
  @Input() main$ = Observable.never();

  // Force color to simplify tracking of some inputs
  @Input() color;

  @Input() leftPad = 45;

  ngOnInit() {
    const initTime = (new Date).getTime();
    const sourceSubscription = this.source$.subscribe(value => {
      this.source.push({value, left: ((new Date).getTime() - initTime) / 1000 * this.leftPad})

      const sourcesLength = this.source.length;
      if (sourcesLength > 1
        && this.source[sourcesLength - 1].left - this.source[sourcesLength - 2].left < 30
        && !this.source[sourcesLength - 2].top
      ) {
        this.source[sourcesLength - 1].top = 30;
      }
    });

    this.main$.subscribe(null, null, () => sourceSubscription.unsubscribe());
  }
}
