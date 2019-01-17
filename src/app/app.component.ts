import { Component } from '@angular/core';

@Component({
  selector: 'rx-visualizations-app',
  template: `
    <header class="header">
      <img src="assets/rxjs-logo.png" />
      <h1 class="page-title">RxJS Visualize</h1>
    </header>
    <aside class="small-screen-warning">
      <strong>Warning:</strong> This app is intended to be viewed on a
      relatively wide screen and is not responsive for smaller screens. It
      should still work on smaller screens, but you may have to scroll or
      otherwise manipulate your screen size to see the full visualizations.
    </aside>
    <rx-visualizations-list></rx-visualizations-list>
  `,
})
export class RxVisualizationsAppComponent {}
