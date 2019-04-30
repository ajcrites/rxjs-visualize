import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';
import { delay, pluck } from 'rxjs/operators';

@Component({
  selector: 'rx-bind-callback',
  template: `
    <h1>bindCallback</h1>
    <p>
      Create an Observable from a function that takes a callback. The Observable
      will emit and complete when the callback would have normally been called.
      This is useful for interop with APIs that use callbacks.
    </p>
    <p>
      This example won't use your location for anything except to display the
      accuracy to the screen, if able.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="test"></rxjs-visualize-marble>
  `,
})
export class RxBindCallbackComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  test = bindCallback(
    navigator.geolocation.getCurrentPosition.bind(navigator.geolocation),
  )().pipe(
    delay(1000),
    pluck('coords', 'accuracy'),
  );
}
