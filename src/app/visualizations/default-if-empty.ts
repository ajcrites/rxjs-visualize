import { Component } from '@angular/core';

import { empty } from 'rxjs/observable/empty';
import { defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'rx-default-if-empty',
  template: `
    <h2>Default If Empty</h2>
    <marble [source$]="default$"></marble>
  `,
})
export class RxDefaultIfEmptyComponent {
  default$ = empty().pipe(defaultIfEmpty('e'));
}
