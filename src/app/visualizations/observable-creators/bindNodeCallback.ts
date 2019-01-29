import { Component } from '@angular/core';

import { bindNodeCallback } from 'rxjs';

@Component({
  selector: 'rx-bind-node-callback',
  template: `
    <h1>bindNodeCallback</h1>
    <p>
      This is similar to
      <a routerLink="/bindCallback"> <code>bindCallback</code></a
      >. Node-style callbacks' first argument is an error. If this first
      argument is provided (i.e. an error occurred),
      <code>bindNodeCallback</code> will emit an error. Otherwise, this
      functions like <code>bindCallback</code>.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble [source]="test"></marble> <marble [source]="testWithError"></marble>
  `,
})
export class RxBindNodeCallbackComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  cb = callback => setTimeout(() => callback(null, 'T'), 1000);
  cbWithError = callback => setTimeout(() => callback(new Error()), 1000);

  test = bindNodeCallback(this.cb)();
  testWithError = bindNodeCallback(this.cbWithError)();
}
