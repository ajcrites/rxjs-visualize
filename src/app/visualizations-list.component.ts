import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rx-visualizations-list',
  template: `
    <rx-visualization
      *ngFor="let visualization of visualizations"
      [visualization]="visualization"
    ></rx-visualization>
  `,
})
export class VisualizationsListComponent {
  visualizations = [];

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(
      segments =>
        (this.visualizations = segments.length
          ? segments[0].path.split(',')
          : []),
    );
  }
}
