import { Component } from '@angular/core';

import { using, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'rx-using',
  template: `
    <h1>using</h1>
    <p>
      This may be the final boss of the Observable creators / operators. I'm not
      entirely sure how you would use this properly. It seems like if you have
      an Object that will require some unique cleanup logic you can create a
      <code>.unsubscribe</code> method for it to handle the cleanup. Then, when
      the provided Observable (from the Observable factory function) completes,
      that cleanup logic is run for you.
    </p>
    <p>
      It seems like this would be handy in cases where you are explicitly
      calling cleanup functions when Observable complete.
    </p>
    <pre prism-highlight="typescript">{{ code }}</pre>

    <marble *ngFor="let input of inputs" [source]="input"></marble>
    <marble [source]="output"></marble>
  `,
})
export class RxUsingComponent {
  code = preval`module.exports = require('../codefile')(__filename)`;

  resource = new class {
    count = 0;
    interval;
    start(cb) {
      this.interval = setInterval(() => {
        this.count += 1;
        cb(this.count);
      }, 1000);
    }
    unsubscribe() {
      // tslint:disable-next-line:no-console ... open your console!
      console.log('DONE!');
      clearInterval(this.interval);
    }
  }();

  output = using(
    () => this.resource,
    resource => {
      const subject = new Subject();
      (resource as any).start(subject.next.bind(subject));

      return subject.pipe(take(5));
    },
  );
}
