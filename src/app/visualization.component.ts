import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'rx-visualization',
  template: `
    <div class="visualization">
      <button class="refresh-button" (click)="refresh()" *ngIf="showRefresh">
        <img src="assets/refresh.png" alt="refresh" />
      </button>
      <ng-container [ngSwitch]="visualization" *ngIf="show">
        <rx-bind-callback *ngSwitchCase="'bindCallback'"></rx-bind-callback>
        <rx-interval *ngSwitchCase="'interval'"></rx-interval>
        <rx-concat *ngSwitchCase="'concat'"></rx-concat>
        <rx-merge *ngSwitchCase="'merge'"></rx-merge>
        <rx-from-event *ngSwitchCase="'fromEvent'"></rx-from-event>
        <rx-fork-join *ngSwitchCase="'forkJoin'"></rx-fork-join>
        <rx-of *ngSwitchCase="'of'"></rx-of>
        <rx-from *ngSwitchCase="'from'"></rx-from>
        <rx-iif *ngSwitchCase="'iif'"></rx-iif>
        <rx-zip *ngSwitchCase="'zip'"></rx-zip>
        <rx-combine-latest *ngSwitchCase="'combine-latest'"></rx-combine-latest>
        <rx-generate *ngSwitchCase="'generate'"></rx-generate>
        <rx-timer *ngSwitchCase="'timer'"></rx-timer>

        <rx-audit-time *ngSwitchCase="'auditTime'"></rx-audit-time>
        <rx-audit *ngSwitchCase="'audit'"></rx-audit>
        <rx-buffer-count *ngSwitchCase="'bufferCount'"></rx-buffer-count>
        <rx-buffer-time *ngSwitchCase="'bufferTime'"></rx-buffer-time>
        <rx-buffer-toggle *ngSwitchCase="'bufferToggle'"></rx-buffer-toggle>
        <rx-buffer-when *ngSwitchCase="'bufferWhen'"></rx-buffer-when>
        <rx-buffer *ngSwitchCase="'buffer'"></rx-buffer>
        <rx-catch-error *ngSwitchCase="'catchError'"></rx-catch-error>
        <rx-combine-all *ngSwitchCase="'combineAll'"></rx-combine-all>
        <rx-combine-latest *ngSwitchCase="'combineLatest'"></rx-combine-latest>
        <rx-concat-all *ngSwitchCase="'concatAll'"></rx-concat-all>
        <rx-concat-map-to *ngSwitchCase="'concatMapTo'"></rx-concat-map-to>
        <rx-concat-map *ngSwitchCase="'concatMap'"></rx-concat-map>
        <rx-count *ngSwitchCase="'count'"></rx-count>
        <rx-debounce-time *ngSwitchCase="'debounceTime'"></rx-debounce-time>
        <rx-dematerialize *ngSwitchCase="'dematerialize'"></rx-dematerialize>
        <rx-debounce *ngSwitchCase="'debounce'"></rx-debounce>
        <rx-default-if-empty
          *ngSwitchCase="'defaultIfEmpty'"
        ></rx-default-if-empty>
        <rx-delay-when *ngSwitchCase="'delayWhen'"></rx-delay-when>
        <rx-delay *ngSwitchCase="'delay'"></rx-delay>
        <rx-distinct-until-changed
          *ngSwitchCase="'distinctUntilChanged'"
        ></rx-distinct-until-changed>
        <rx-distinct-until-key-changed
          *ngSwitchCase="'distinctUntilKeyChanged'"
        ></rx-distinct-until-key-changed>
        <rx-distinct *ngSwitchCase="'distinct'"></rx-distinct>
        <rx-tap *ngSwitchCase="'tap'"></rx-tap>
        <rx-end-with *ngSwitchCase="'endWith'"></rx-end-with>
        <rx-element-at *ngSwitchCase="'elementAt'"></rx-element-at>
        <rx-every *ngSwitchCase="'every'"></rx-every>
        <rx-exhaust-map *ngSwitchCase="'exhaustMap'"></rx-exhaust-map>
        <rx-exhaust *ngSwitchCase="'exhaust'"></rx-exhaust>
        <rx-expand *ngSwitchCase="'expand'"></rx-expand>
        <rx-filter *ngSwitchCase="'filter'"></rx-filter>
        <rx-finalize *ngSwitchCase="'finalize'"></rx-finalize>
        <rx-find-index *ngSwitchCase="'findIndex'"></rx-find-index>
        <rx-find *ngSwitchCase="'find'"></rx-find>
        <rx-first *ngSwitchCase="'first'"></rx-first>
        <rx-group-by *ngSwitchCase="'groupBy'"></rx-group-by>
        <rx-ignore-elements
          *ngSwitchCase="'ignoreElements'"
        ></rx-ignore-elements>
        <rx-is-empty *ngSwitchCase="'isEmpty'"></rx-is-empty>
        <rx-last *ngSwitchCase="'last'"></rx-last>
        <rx-map-to *ngSwitchCase="'mapTo'"></rx-map-to>
        <rx-map *ngSwitchCase="'map'"></rx-map>
        <rx-materialize *ngSwitchCase="'materialize'"></rx-materialize>
        <rx-max *ngSwitchCase="'max'"></rx-max>
        <rx-merge-all *ngSwitchCase="'mergeAll'"></rx-merge-all>
        <rx-merge-map-to *ngSwitchCase="'mergeMapTo'"></rx-merge-map-to>
        <rx-merge-map *ngSwitchCase="'mergeMap'"></rx-merge-map>
        <rx-merge-scan *ngSwitchCase="'mergeScan'"></rx-merge-scan>
        <rx-min *ngSwitchCase="'min'"></rx-min>
        <rx-multicast *ngSwitchCase="'multicast'"></rx-multicast>
        <rx-observe-on *ngSwitchCase="'observeOn'"></rx-observe-on>
        <rx-on-error-resume-next
          *ngSwitchCase="'onErrorResumeNext'"
        ></rx-on-error-resume-next>
        <rx-pairwise *ngSwitchCase="'pairwise'"></rx-pairwise>
        <rx-partition *ngSwitchCase="'partition'"></rx-partition>
        <rx-pluck *ngSwitchCase="'pluck'"></rx-pluck>
        <rx-publish *ngSwitchCase="'publish'"></rx-publish>
        <rx-publish-behavior
          *ngSwitchCase="'publishBehavior'"
        ></rx-publish-behavior>
        <rx-publish-last *ngSwitchCase="'publishLast'"></rx-publish-last>
        <rx-publish-replay *ngSwitchCase="'publishReplay'"></rx-publish-replay>
        <rx-reduce *ngSwitchCase="'reduce'"></rx-reduce>
        <rx-ref-count *ngSwitchCase="'refCount'"></rx-ref-count>
        <rx-repeat-when *ngSwitchCase="'repeatWhen'"></rx-repeat-when>
        <rx-repeat *ngSwitchCase="'repeat'"></rx-repeat>
        <rx-retry-when *ngSwitchCase="'retryWhen'"></rx-retry-when>
        <rx-retry *ngSwitchCase="'retry'"></rx-retry>
        <rx-sample-time *ngSwitchCase="'sampleTime'"></rx-sample-time>
        <rx-sample *ngSwitchCase="'sample'"></rx-sample>
        <rx-scan *ngSwitchCase="'scan'"></rx-scan>
        <rx-sequence-equal *ngSwitchCase="'sequenceEqual'"></rx-sequence-equal>
        <rx-single *ngSwitchCase="'single'"></rx-single>
        <rx-skip-until *ngSwitchCase="'skipUntil'"></rx-skip-until>
        <rx-skip-while *ngSwitchCase="'skipWhile'"></rx-skip-while>
        <rx-skip *ngSwitchCase="'skip'"></rx-skip>
        <rx-start-with *ngSwitchCase="'startWith'"></rx-start-with>
        <rx-share-replay *ngSwitchCase="'shareReplay'"></rx-share-replay>
        <rx-share *ngSwitchCase="'share'"></rx-share>
        <rx-skip-last *ngSwitchCase="'skipLast'"></rx-skip-last>
        <rx-subscribe-on *ngSwitchCase="'subscribeOn'"></rx-subscribe-on>
        <rx-switch-map-to *ngSwitchCase="'switchMapTo'"></rx-switch-map-to>
        <rx-switch-map *ngSwitchCase="'switchMap'"></rx-switch-map>
        <rx-switch-all *ngSwitchCase="'switchAll'"></rx-switch-all>
        <rx-take-last *ngSwitchCase="'takeLast'"></rx-take-last>
        <rx-take-until *ngSwitchCase="'takeUntil'"></rx-take-until>
        <rx-take-while *ngSwitchCase="'takeWhile'"></rx-take-while>
        <rx-take *ngSwitchCase="'take'"></rx-take>
        <rx-throttle-time *ngSwitchCase="'throttleTime'"></rx-throttle-time>
        <rx-throttle *ngSwitchCase="'throttle'"></rx-throttle>
        <rx-throw-if-empty *ngSwitchCase="'throwIfEmpty'"></rx-throw-if-empty>
        <rx-time-interval *ngSwitchCase="'timeInterval'"></rx-time-interval>
        <rx-timeout *ngSwitchCase="'timeout'"></rx-timeout>
        <rx-timeout-with *ngSwitchCase="'timeoutWith'"></rx-timeout-with>
        <rx-timestamp *ngSwitchCase="'timestamp'"></rx-timestamp>
        <rx-to-array *ngSwitchCase="'toArray'"></rx-to-array>
        <rx-window-count *ngSwitchCase="'windowCount'"></rx-window-count>
        <rx-window-time *ngSwitchCase="'windowTime'"></rx-window-time>
        <rx-window-toggle *ngSwitchCase="'windowToggle'"></rx-window-toggle>
        <rx-window-when *ngSwitchCase="'windowWhen'"></rx-window-when>
        <rx-window *ngSwitchCase="'window'"></rx-window>
        <rx-with-latest-from
          *ngSwitchCase="'withLatestFrom'"
        ></rx-with-latest-from>
        <rx-zip-all *ngSwitchCase="'zipAll'"></rx-zip-all>
        <section *ngSwitchDefault #noOperator>
          <p>
            The <code>{{ visualization }}</code> operator doesn't have a
            visualization yet or doesn't exist.
          </p>
          <p>
            Deprecated operators are not included. Keep in mind that operators
            are camelCase (<code>zipall</code> does not exist, but
            <code>zipAll</code> does)
          </p>
          <p>
            You can select operators from the menu on the left, or
            <a routerLink="/">go home</a>.
          </p>
        </section>
      </ng-container>
    </div>
  `,
})
export class VisualizationComponent implements AfterViewInit {
  @Input() visualization;
  @ViewChild('noOperator') noOperator;

  show = true;
  showRefresh = false;

  refresh() {
    this.show = false;
    setTimeout(() => (this.show = true));
  }

  ngAfterViewInit() {
    // Run asynchronously so Angular doesn't compain about view changing after
    // it's been checked
    setTimeout(() => (this.showRefresh = !this.noOperator));
  }
}
