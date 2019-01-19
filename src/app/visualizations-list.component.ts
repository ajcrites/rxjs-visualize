import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rx-visualizations-list',
  template: `
    <rx-visualization
      *ngFor="let visualization of visualizations"
      [visualization]="visualization"
    ></rx-visualization>
    <section *ngIf="!visualizations.length">
      <p>Welcome to my showcase of RxJS operators using RxJS operators.</p>
      <p>
        You can click on an operator on the left menu to see that operator. If
        you wish to see multiple operators at a time, you can click a checkbox
        next to an operator to display that operator at the same time as another
        selected operator. The operators are displayed in order of your
        selection.
      </p>
      <p>
        Operators are stored in the route (url) of your browser so you can
        select and share operators you'd like other people to see.
      </p>
      <p>
        See the
        <a href="https://rxjs-dev.firebaseapp.com/api"
          >RxJS operator API documentation</a
        >
        for more specific information.
      </p>
      <p>Don't know where to start? Try some of my favorites:</p>
      <ul>
        <li>
          <a routerLink="/switch-map"><code>switchMap</code></a>
        </li>
        <li>
          <a routerLink="/filter"><code>filter</code></a>
        </li>
        <li>
          <a routerLink="/catch"><code>catch</code></a>
        </li>
        <li>
          <a routerLink="/take"><code>take</code></a>
        </li>
        <li>
          <a routerLink="/map"><code>map</code></a>
        </li>
        <li>
          <a routerLink="/pluck"><code>pluck</code></a>
        </li>
      </ul>
    </section>
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
