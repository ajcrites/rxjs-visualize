import { Component } from '@angular/core';

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
  visualizations = ['buffer-count', 'filter'];
}
