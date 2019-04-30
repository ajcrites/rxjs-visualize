import { Component } from '@angular/core';
import { fromEventPattern, timer } from 'rxjs';
import { mapTo, mergeMapTo, takeUntil, throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'rx-from-event-pattern',
  template: `
    <h1>fromEventPattern</h1>
    <p>You have ten seconds to click anywhere and trigger some emissions!</p>
    <p>
      This is similar to <code>fromEvent</code> except that you specify the
      functions to create the event listener and destroy the event listener
      rather than specifying the event listener and event itself. This gives you
      more control over adding and removing event listeners.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <rxjs-visualize-marble [source]="timeout"></rxjs-visualize-marble>
    <rxjs-visualize-marble
      color="green"
      [source]="clicks"
      [main]="timeout"
    ></rxjs-visualize-marble>
  `,
})
export class RxFromEventPatternComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  addClickHandler = (handler: () => void) =>
    document.addEventListener('click', handler);
  removeClickHandler = (handler: () => void) =>
    document.removeEventListener('click', handler);

  timeout = timer(10000).pipe(mapTo('done'));

  // Debounce initial navigation click
  clicks = timer(200).pipe(
    mergeMapTo(fromEventPattern(this.addClickHandler, this.removeClickHandler)),
    takeUntil(this.timeout),
    mapTo('c'),
    throwIfEmpty(),
  );
}
