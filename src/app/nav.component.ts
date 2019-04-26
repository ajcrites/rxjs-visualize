import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';

interface RxOperatorFile {
  name: string;
  file: string;
}

@Component({
  selector: 'rx-nav',
  template: `
    <h1 class="menu-section-title">Observable Creators</h1>
    <ul class="operators-list" role="menu">
      <li *ngFor="let fn of observableCreators" role="menuitem">
        <input
          role="menuitemcheckbox"
          aria-label="Select Visualization"
          type="checkbox"
          (change)="select(fn.file, $event)"
          [checked]="hasSelectedOperator(fn)"
        />
        <a (click)="navigate(fn.file)">{{ fn.name }}</a>
      </li>
    </ul>

    <h1 class="menu-section-title">Operators</h1>
    <ul class="operators-list" role="menu">
      <li *ngFor="let operator of operators" role="menuitem">
        <input
          role="menuitemcheckbox"
          aria-label="Select Visualization"
          type="checkbox"
          (change)="select(operator.file, $event)"
          [checked]="hasSelectedOperator(operator)"
        />
        <a (click)="navigate(operator.file)">{{ operator.name }}</a>
      </li>
    </ul>
  `,
})
export class RxNavComponent implements OnInit {
  selectedOperators: string[] = [];

  operators = preval`
    const fs = require('fs');
    const { camelCase } = require('lodash');
    module.exports = fs.readdirSync(__dirname + '/visualizations/operators').
      filter(file => /\.ts$/.test(file)).map(file =>
      file.replace('.ts', '')
    ).map(operator => ({ file: operator, name: camelCase(operator) }))
    .concat([{ file: 'mergeMap', name: 'flatMap' }])
    .sort((a, b) => a.name < b.name ? -1 : 1);
  `;

  observableCreators = preval`
    const fs = require('fs');
    const { camelCase } = require('lodash');
    module.exports = fs.readdirSync(__dirname + '/visualizations/observable-creators').
      filter(file => /\.ts$/.test(file)).map(file =>
      file.replace('.ts', '')
    ).map(fn => ({ file: getFnObc(fn), name: camelCase(fn) }))
    .sort((a, b) => a.name < b.name ? -1 : 1);

  // Some operator names are the same as some Observable Creator names. We
  // append 'Obc' to these for navigation purposes.
  function getFnObc(fn) {
    switch(fn) {
      case 'onErrorResumeNext':
        return 'onErrorResumeNextObc';
      default:
        return fn;
    }
  }
  `;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(({ url }: NavigationEnd) => url),
        startWith(window.location.pathname),
      )
      .subscribe(url => {
        this.selectedOperators = url.replace(/^\//, '').split(',');
      });
  }

  navigate(file: string) {
    this.selectedOperators = [file];
    this.router.navigate(['/' + file]);
  }

  hasSelectedOperator(operator: RxOperatorFile) {
    return this.selectedOperators.some(file => operator.file === file);
  }

  select(file: string, { target: { checked } }: { target: HTMLInputElement }) {
    if (checked) {
      this.selectedOperators.push(file);
    } else {
      this.selectedOperators = this.selectedOperators.filter(
        oper => oper !== file,
      );
    }
    this.router.navigate(['/' + this.selectedOperators.join()]);
  }
}
