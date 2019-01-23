import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'rx-nav',
  template: `
    <ul class="operators-list">
      <li *ngFor="let operator of operators">
        <input
          role="nav"
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
  selectedOperators = [];

  operators = preval`
    const fs = require('fs');
    const { camelCase } = require('lodash');
    module.exports = fs.readdirSync(__dirname + '/visualizations').
      filter(file => /\.ts$/.test(file)).map(file =>
      file.replace('.ts', '')
    ).map(operator => ({ file: operator, name: camelCase(operator) }))
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

  navigate(file) {
    this.selectedOperators = [file];
    this.router.navigate(['/' + file]);
  }

  hasSelectedOperator(operator) {
    return this.selectedOperators.some(file => operator.file === file);
  }

  select(file, { target: { checked } }) {
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
