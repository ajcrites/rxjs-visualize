import { Component } from '@angular/core';

@Component({
  selector: 'rx-nav',
  template: `
    <ul class="operators-list">
      <li *ngFor="let operator of operators">{{ operator.name }}</li>
    </ul>
  `,
})
export class RxNavComponent {
  operators = preval`
    const fs = require('fs');
    const { camelCase } = require('lodash');
    module.exports = fs.readdirSync(__dirname + '/visualizations').map(file =>
      file.replace('.ts', '')
    ).map(operator => ({ file: operator, name: camelCase(operator) }))
  `;
}
