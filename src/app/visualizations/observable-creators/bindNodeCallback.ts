import { Component } from '@angular/core';
import { bindNodeCallback } from 'rxjs';

type NodeJsCallback = (e: Error, param?: string) => void;

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

    <rxjs-visualize-marble [source]="test"></rxjs-visualize-marble>
    <rxjs-visualize-marble [source]="testWithError"></rxjs-visualize-marble>
  `,
})
export class RxBindNodeCallbackComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  cb = (callback: NodeJsCallback) =>
    setTimeout(() => callback(null, 'T'), 1000);
  cbWithError = (callback: NodeJsCallback) =>
    setTimeout(() => callback(new Error()), 1000);

  test = bindNodeCallback(this.cb)();
  testWithError = bindNodeCallback(this.cbWithError)();
}
