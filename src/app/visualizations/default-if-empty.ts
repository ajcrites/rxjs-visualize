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
export class RxDefaultIfEmptyComponent {
  default$ = Observable.empty().defaultIfEmpty("e");
}


