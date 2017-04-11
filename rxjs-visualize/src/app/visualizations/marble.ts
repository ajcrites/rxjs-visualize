import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { animations } from './visualizations.animations';

@Component({
  selector: 'marble',
  template: `
    <i [@appear] *ngFor="let elem of source;" [style.left.px]="elem.left">{{elem.value}}</i>
  `,
  animations,
})
export class Marble implements OnInit {
  source = [];
  left = 0;
  // Source Observable for the marble diagram
  @Input() source$;

  // Source Observable for positioning. This observable emits faster than
  // the source. The fastest source does not need a positioning observable.
  // This will increase the `left` positioning for the slower source based
  // on the faster source
  @Input() positioningSource$;

  ngOnInit() {
    if (this.positioningSource$) {
      this.positioningSource$.subscribe(() => this.left = this.left + 35);
    }

    this.source$.subscribe(value => {
      this.left += 35;
      // We need to account for the width of the positioning source element too
      if (this.positioningSource$) {
        this.left += 35;
      }
      this.source.push({value, left: this.left})
    });
  }
}
