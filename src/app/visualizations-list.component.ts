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
        Operators are stored in the pathname (url) of your browser so you can
        select and share operators you'd like other people to see.
      </p>
      <p>
        <strong>Note:</strong> deprecated operators are not included. If you
        can't find an operator here that you're using, it's probably deprecated.
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
          <a routerLink="/catch-error"><code>catchError</code></a>
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
      <p>
        Most of the visualizations here work off of an interval emitting every
        second. The visualization will show the code that sets up the example
        Observables and then the marble diagram (visualization) in order of the
        Observable unless otherwise specified. For example:
      </p>

      <pre prism-highlight="typescript">
// The output of this is the first marble diagram below
input = interval(1000).pipe(take(3))
// The output of this is the second marble diagram below
output = this.input.pipe(mapNumberToChar)
      </pre
      >

      <div class="marble">
        <div class="guide complete" style="width: 155px;"></div>
        <i style="left: 25px;">0</i> <i style="left: 65px;">1</i>
        <i style="left: 105px;">2</i>
      </div>
      <div class="marble">
        <div class="guide complete" style="width: 155px;"></div>
        <i style="left: 25px;">a</i> <i style="left: 65px;">b</i>
        <i style="left: 105px;">c</i>
      </div>
      <div style="position: relative;">
        Observables that are complete end with
        <div class="guide complete example-guide"></div>
        and Observables that end with an error end with
        <div class="guide error example-guide" style="width: 25px"></div>
      </div>
      <p>
        Sometimes an Observable will emit multiple values at once or very close
        together. This is a bit tough to visual and it's something that can be
        improved. For now, the marbles displays are blended like so:
      </p>
      <div class="marble">
        <div class="guide complete" style="width: 150px;"></div>
        <i style="left: 25px;">1</i> <i style="left: 35px;">2</i>
        <i style="left: 45px;">3</i> <i style="left: 105px;">a0</i>
        <i style="left: 105px;">b1</i>
      </div>
      <p>
        It can be a bit tough to tell exactly what's going on with overlapping
        marble values, but at least this gives a clue. "Inspect Element" can
        help more for now.
      </p>
    </section>
  `,
})
export class VisualizationsListComponent {
  visualizations = [];

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(
      segments =>
        (this.visualizations = segments.length
          ? segments[0].path.split(',').filter(Boolean)
          : []),
    );
  }
}
