import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  animations: [
    trigger('fadeIn', [
      state(
        'in',
        style({
          opacity: 1,
          top: 0,
        }),
      ),
      transition('* => in', [
        style({
          opacity: 0,
          top: -100,
        }),
        animate('1s ease-out'),
      ]),
    ]),
  ],
  selector: 'rx-visualizations-app',
  template: `
    <div style="position: relative" [@fadeIn]="fadeInState">
      <nav class="main-nav" [class.nav-open]="navOpen">
        <div class="nav-title">
          <svg
            class="nav-menu-button"
            (click)="navOpen = !navOpen"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>

          <h1 class="menu-title">RxJS Operators</h1>
        </div>
        <rx-nav></rx-nav>
      </nav>
      <div class="content" [ngClass]="navOpen ? 'nav-open' : null">
        <header class="header">
          <a routerLink="/"><img src="assets/rxjs-logo.png" alt="Home"/></a>
          <h1 class="page-title">RxJS Visualize</h1>
          <a
            href="https://github.com/ajcrites/rxjs-visualize"
            class="github-icon"
          >
            <img
              width="32"
              height="32"
              src="assets/github-icon.png"
              alt="GitHub Repository"
            />
          </a>
        </header>
        <aside class="small-screen-warning">
          <strong>Warning:</strong> This app is intended to be viewed on a
          relatively wide screen and is not responsive for smaller screens. It
          should still work on smaller screens, but you may have to scroll the
          marble diagrams or otherwise manipulate your screen size to see the
          full visualizations.
        </aside>
        <main><router-outlet></router-outlet></main>
      </div>
    </div>
  `,
})
export class RxVisualizationsAppComponent implements OnInit {
  fadeInState = null;
  navOpen = true;

  ngOnInit() {
    this.fadeInState = 'in';
  }
}
