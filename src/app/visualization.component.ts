import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'rx-visualization',
  template: `
    <div class="visualization">
      <button class="refresh-button" (click)="refresh()" *ngIf="showRefresh">
        <img src="assets/refresh.png" alt="refresh" />
      </button>
      <ng-container [ngSwitch]="visualization" *ngIf="show">
        <rx-audit-time *ngSwitchCase="'audit-time'"></rx-audit-time>
        <rx-audit *ngSwitchCase="'audit'"></rx-audit>
        <rx-buffer-count *ngSwitchCase="'buffer-count'"></rx-buffer-count>
        <rx-buffer-time *ngSwitchCase="'buffer-time'"></rx-buffer-time>
        <rx-buffer-toggle *ngSwitchCase="'buffer-toggle'"></rx-buffer-toggle>
        <rx-buffer-when *ngSwitchCase="'buffer-when'"></rx-buffer-when>
        <rx-buffer *ngSwitchCase="'buffer'"></rx-buffer>
        <rx-catch-error *ngSwitchCase="'catch-error'"></rx-catch-error>
        <rx-combine-all *ngSwitchCase="'combine-all'"></rx-combine-all>
        <rx-combine-latest *ngSwitchCase="'combine-latest'"></rx-combine-latest>
        <rx-concat-all *ngSwitchCase="'concat-all'"></rx-concat-all>
        <rx-concat-map-to *ngSwitchCase="'concat-map-to'"></rx-concat-map-to>
        <rx-concat-map *ngSwitchCase="'concat-map'"></rx-concat-map>
        <rx-count *ngSwitchCase="'count'"></rx-count>
        <rx-debounce-time *ngSwitchCase="'debounce-time'"></rx-debounce-time>
        <rx-dematerialize *ngSwitchCase="'dematerialize'"></rx-dematerialize>
        <rx-debounce *ngSwitchCase="'debounce'"></rx-debounce>
        <rx-default-if-empty
          *ngSwitchCase="'default-if-empty'"
        ></rx-default-if-empty>
        <rx-delay-when *ngSwitchCase="'delay-when'"></rx-delay-when>
        <rx-delay *ngSwitchCase="'delay'"></rx-delay>
        <rx-distinct-until-changed
          *ngSwitchCase="'distinct-until-changed'"
        ></rx-distinct-until-changed>
        <rx-distinct-until-key-changed
          *ngSwitchCase="'distinct-until-key-changed'"
        ></rx-distinct-until-key-changed>
        <rx-distinct *ngSwitchCase="'distinct'"></rx-distinct>
        <rx-tap *ngSwitchCase="'tap'"></rx-tap>
        <rx-end-with *ngSwitchCase="'end-with'"></rx-end-with>
        <rx-element-at *ngSwitchCase="'element-at'"></rx-element-at>
        <rx-every *ngSwitchCase="'every'"></rx-every>
        <rx-exhaust-map *ngSwitchCase="'exhaust-map'"></rx-exhaust-map>
        <rx-exhaust *ngSwitchCase="'exhaust'"></rx-exhaust>
        <rx-expand *ngSwitchCase="'expand'"></rx-expand>
        <rx-filter *ngSwitchCase="'filter'"></rx-filter>
        <rx-finalize *ngSwitchCase="'finalize'"></rx-finalize>
        <rx-find-index *ngSwitchCase="'find-index'"></rx-find-index>
        <rx-find *ngSwitchCase="'find'"></rx-find>
        <rx-first *ngSwitchCase="'first'"></rx-first>
        <rx-group-by *ngSwitchCase="'group-by'"></rx-group-by>
        <rx-ignore-elements
          *ngSwitchCase="'ignore-elements'"
        ></rx-ignore-elements>
        <rx-is-empty *ngSwitchCase="'is-empty'"></rx-is-empty>
        <rx-last *ngSwitchCase="'last'"></rx-last>
        <rx-map-to *ngSwitchCase="'map-to'"></rx-map-to>
        <rx-map *ngSwitchCase="'map'"></rx-map>
        <rx-materialize *ngSwitchCase="'materialize'"></rx-materialize>
        <rx-max *ngSwitchCase="'max'"></rx-max>
        <rx-merge-all *ngSwitchCase="'merge-all'"></rx-merge-all>
        <rx-merge-map-to *ngSwitchCase="'merge-map-to'"></rx-merge-map-to>
        <rx-merge-map *ngSwitchCase="'merge-map'"></rx-merge-map>
        <rx-merge-scan *ngSwitchCase="'merge-scan'"></rx-merge-scan>
        <rx-min *ngSwitchCase="'min'"></rx-min>
        <rx-multicast *ngSwitchCase="'multicast'"></rx-multicast>
        <rx-observe-on *ngSwitchCase="'observe-on'"></rx-observe-on>
        <rx-on-error-resume-next
          *ngSwitchCase="'on-error-resume-next'"
        ></rx-on-error-resume-next>
        <rx-pairwise *ngSwitchCase="'pairwise'"></rx-pairwise>
        <rx-partition *ngSwitchCase="'partition'"></rx-partition>
        <rx-pluck *ngSwitchCase="'pluck'"></rx-pluck>
        <rx-publish *ngSwitchCase="'publish'"></rx-publish>
        <rx-publish-behavior
          *ngSwitchCase="'publish-behavior'"
        ></rx-publish-behavior>
        <rx-publish-last *ngSwitchCase="'publish-last'"></rx-publish-last>
        <rx-publish-replay *ngSwitchCase="'publish-replay'"></rx-publish-replay>
        <rx-reduce *ngSwitchCase="'reduce'"></rx-reduce>
        <rx-ref-count *ngSwitchCase="'ref-count'"></rx-ref-count>
        <rx-repeat-when *ngSwitchCase="'repeat-when'"></rx-repeat-when>
        <rx-repeat *ngSwitchCase="'repeat'"></rx-repeat>
        <rx-retry-when *ngSwitchCase="'retry-when'"></rx-retry-when>
        <rx-retry *ngSwitchCase="'retry'"></rx-retry>
        <rx-sample-time *ngSwitchCase="'sample-time'"></rx-sample-time>
        <rx-sample *ngSwitchCase="'sample'"></rx-sample>
        <rx-scan *ngSwitchCase="'scan'"></rx-scan>
        <rx-sequence-equal *ngSwitchCase="'sequence-equal'"></rx-sequence-equal>
        <rx-single *ngSwitchCase="'single'"></rx-single>
        <rx-skip-until *ngSwitchCase="'skip-until'"></rx-skip-until>
        <rx-skip-while *ngSwitchCase="'skip-while'"></rx-skip-while>
        <rx-skip *ngSwitchCase="'skip'"></rx-skip>
        <rx-start-with *ngSwitchCase="'start-with'"></rx-start-with>
        <rx-share-replay *ngSwitchCase="'share-replay'"></rx-share-replay>
        <rx-share *ngSwitchCase="'share'"></rx-share>
        <rx-skip-last *ngSwitchCase="'skip-last'"></rx-skip-last>
        <rx-subscribe-on *ngSwitchCase="'subscribe-on'"></rx-subscribe-on>
        <rx-switch-map-to *ngSwitchCase="'switch-map-to'"></rx-switch-map-to>
        <rx-switch-map *ngSwitchCase="'switch-map'"></rx-switch-map>
        <rx-switch-all *ngSwitchCase="'switch-all'"></rx-switch-all>
        <rx-take-last *ngSwitchCase="'take-last'"></rx-take-last>
        <rx-take-until *ngSwitchCase="'take-until'"></rx-take-until>
        <rx-take-while *ngSwitchCase="'take-while'"></rx-take-while>
        <rx-take *ngSwitchCase="'take'"></rx-take>
        <rx-throttle-time *ngSwitchCase="'throttle-time'"></rx-throttle-time>
        <rx-throttle *ngSwitchCase="'throttle'"></rx-throttle>
        <rx-throw-if-empty *ngSwitchCase="'throw-if-empty'"></rx-throw-if-empty>
        <rx-time-interval *ngSwitchCase="'time-interval'"></rx-time-interval>
        <rx-timeout *ngSwitchCase="'timeout'"></rx-timeout>
        <rx-timeout-with *ngSwitchCase="'timeout-with'"></rx-timeout-with>
        <rx-timestamp *ngSwitchCase="'timestamp'"></rx-timestamp>
        <rx-to-array *ngSwitchCase="'to-array'"></rx-to-array>
        <rx-window-count *ngSwitchCase="'window-count'"></rx-window-count>
        <rx-window-time *ngSwitchCase="'window-time'"></rx-window-time>
        <rx-window-toggle *ngSwitchCase="'window-toggle'"></rx-window-toggle>
        <rx-window-when *ngSwitchCase="'window-when'"></rx-window-when>
        <rx-window *ngSwitchCase="'window'"></rx-window>
        <rx-with-latest-from
          *ngSwitchCase="'with-latest-from'"
        ></rx-with-latest-from>
        <rx-zip-all *ngSwitchCase="'zip-all'"></rx-zip-all>
        <section *ngSwitchDefault #noOperator>
          <p>
            The <code>{{ visualization }}</code> operator doesn't have a
            visualization yet or doesn't exist.
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
