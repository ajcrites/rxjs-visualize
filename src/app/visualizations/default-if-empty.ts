import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/defaultIfEmpty';

@Component({
  selector: 'rx-default-if-empty',
  template: `
    <h2>Default If Empty</h2>
    <marble [source$]="default$"></marble>
  `
})
// Debounce timer starts over when a value is emitted
// Emit multiple values, but then do not emit another value until after 1 second
// Debounce catches the last value in this set as well as the final value
// Essentially, the difference has to be between the final inner emission (at
// 750ms) and the next outer observable emission (at 2s, more than a 1s
// difference)
export class RxDefaultIfEmptyComponent {
  default$ = Observable.empty().defaultIfEmpty("e");
}


