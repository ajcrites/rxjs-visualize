import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rx-nav',
  template: `
    <ul class="operators-list">
      <li *ngFor="let operator of operators">
        <input
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
    this.selectedOperators = window.location.pathname
      .replace(/^\//, '')
      .split(',');
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
