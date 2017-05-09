import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publish';

@Component({
  selector: 'rx-publish',
  template: `
    <marble [source$]="input$"></marble>
    <h2>Publish</h2>
    <marble [source$]="output$"></marble>
  `
})
export class RxPublishComponent {
  input$ = Observable.interval(1000).take(20).do(val => {
    if (5 === val) {
      this.output$.connect();
    }
  });
  output$ = this.input$.publish();
}

