import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rx-nav',
  template: `
    <ul class="operators-list">
      <li *ngFor="let operator of operators" (click)="navigate(operator.file)">
        {{ operator.name }}
      </li>
    </ul>
  `,
})
export class RxNavComponent {
  operators = preval`
    const fs = require('fs');
    const { camelCase } = require('lodash');
    module.exports = fs.readdirSync(__dirname + '/visualizations').
      filter(file => /\.ts$/.test(file)).map(file =>
      file.replace('.ts', '')
    ).map(operator => ({ file: operator, name: camelCase(operator) }))
  `;

  constructor(private router: Router) {}

  navigate(operator) {
    this.router.navigate(['/' + operator]);
  }
}
