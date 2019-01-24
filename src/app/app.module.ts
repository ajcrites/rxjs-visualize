import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RxVisualizationsAppComponent } from './app.component';
import { VisualizationsListComponent } from './visualizations-list.component';
import { VisualizationComponent } from './visualization.component';
import { RxNavComponent } from './nav.component';

import { RxAuditComponent } from './visualizations/operators/audit';
import { RxAuditTimeComponent } from './visualizations/operators/audit-time';
import { RxBufferComponent } from './visualizations/operators/buffer';
import { RxBufferCountComponent } from './visualizations/operators/buffer-count';
import { RxBufferTimeComponent } from './visualizations/operators/buffer-time';
import { RxBufferToggleComponent } from './visualizations/operators/buffer-toggle';
import { RxBufferWhenComponent } from './visualizations/operators/buffer-when';
import { RxCatchErrorComponent } from './visualizations/operators/catch-error';
import { RxCombineAllComponent } from './visualizations/operators/combine-all';
import { RxCombineLatestComponent } from './visualizations/operators/combine-latest';
import { RxConcatAllComponent } from './visualizations/operators/concat-all';
import { RxConcatMapComponent } from './visualizations/operators/concat-map';
import { RxConcatMapToComponent } from './visualizations/operators/concat-map-to';
import { RxCountComponent } from './visualizations/operators/count';
import { RxDebounceComponent } from './visualizations/operators/debounce';
import { RxDebounceTimeComponent } from './visualizations/operators/debounce-time';
import { RxDefaultIfEmptyComponent } from './visualizations/operators/default-if-empty';
import { RxDematerializeComponent } from './visualizations/operators/dematerialize';
import { RxDelayComponent } from './visualizations/operators/delay';
import { RxDelayWhenComponent } from './visualizations/operators/delay-when';
import { RxDistinctComponent } from './visualizations/operators/distinct';
import { RxDistinctUntilChangedComponent } from './visualizations/operators/distinct-until-changed';
// tslint:disable-next-line:max-line-length
import { RxDistinctUntilKeyChangedComponent } from './visualizations/operators/distinct-until-key-changed';
import { RxTapComponent } from './visualizations/operators/tap';
import { RxEndWithComponent } from './visualizations/operators/end-with';
import { RxElementAtComponent } from './visualizations/operators/element-at';
import { RxEveryComponent } from './visualizations/operators/every';
import { RxExhaustComponent } from './visualizations/operators/exhaust';
import { RxExhaustMapComponent } from './visualizations/operators/exhaust-map';
import { RxExpandComponent } from './visualizations/operators/expand';
import { RxFilterComponent } from './visualizations/operators/filter';
import { RxFinalizeComponent } from './visualizations/operators/finalize';
import { RxFindComponent } from './visualizations/operators/find';
import { RxFindIndexComponent } from './visualizations/operators/find-index';
import { RxFirstComponent } from './visualizations/operators/first';
import { RxGroupByComponent } from './visualizations/operators/group-by';
import { RxIgnoreElementsComponent } from './visualizations/operators/ignore-elements';
import { RxIsEmptyComponent } from './visualizations/operators/is-empty';
import { RxLastComponent } from './visualizations/operators/last';
import { RxMapComponent } from './visualizations/operators/map';
import { RxMapToComponent } from './visualizations/operators/map-to';
import { RxMaterializeComponent } from './visualizations/operators/materialize';
import { RxMaxComponent } from './visualizations/operators/max';
import { RxMergeAllComponent } from './visualizations/operators/merge-all';
import { RxMergeMapComponent } from './visualizations/operators/merge-map';
import { RxMergeMapToComponent } from './visualizations/operators/merge-map-to';
import { RxMergeScanComponent } from './visualizations/operators/merge-scan';
import { RxMinComponent } from './visualizations/operators/min';
import { RxMulticastComponent } from './visualizations/operators/multicast';
import { RxObserveOnComponent } from './visualizations/operators/observe-on';
import { RxOnErrorResumeNextComponent } from './visualizations/operators/on-error-resume-next';
import { RxPairwiseComponent } from './visualizations/operators/pairwise';
import { RxPartitionComponent } from './visualizations/operators/partition';
import { RxPluckComponent } from './visualizations/operators/pluck';
import { RxPublishComponent } from './visualizations/operators/publish';
import { RxPublishBehaviorComponent } from './visualizations/operators/publish-behavior';
import { RxPublishLastComponent } from './visualizations/operators/publish-last';
import { RxPublishReplayComponent } from './visualizations/operators/publish-replay';
import { RxReduceComponent } from './visualizations/operators/reduce';
import { RxRefCountComponent } from './visualizations/operators/ref-count';
import { RxRepeatComponent } from './visualizations/operators/repeat';
import { RxRepeatWhenComponent } from './visualizations/operators/repeat-when';
import { RxRetryComponent } from './visualizations/operators/retry';
import { RxRetryWhenComponent } from './visualizations/operators/retry-when';
import { RxSampleComponent } from './visualizations/operators/sample';
import { RxSampleTimeComponent } from './visualizations/operators/sample-time';
import { RxScanComponent } from './visualizations/operators/scan';
import { RxSequenceEqualComponent } from './visualizations/operators/sequence-equal';
import { RxShareComponent } from './visualizations/operators/share';
import { RxShareReplayComponent } from './visualizations/operators/share-replay';
import { RxSingleComponent } from './visualizations/operators/single';
import { RxSkipLastComponent } from './visualizations/operators/skip-last';
import { RxSkipUntilComponent } from './visualizations/operators/skip-until';
import { RxSkipWhileComponent } from './visualizations/operators/skip-while';
import { RxSkipComponent } from './visualizations/operators/skip';
import { RxStartWithComponent } from './visualizations/operators/start-with';
import { RxSubscribeOnComponent } from './visualizations/operators/subscribe-on';
import { RxSwitchAllComponent } from './visualizations/operators/switch-all';
import { RxSwitchMapComponent } from './visualizations/operators/switch-map';
import { RxSwitchMapToComponent } from './visualizations/operators/switch-map-to';
import { RxTakeComponent } from './visualizations/operators/take';
import { RxTakeLastComponent } from './visualizations/operators/take-last';
import { RxTakeUntilComponent } from './visualizations/operators/take-until';
import { RxTakeWhileComponent } from './visualizations/operators/take-while';
import { RxThrottleComponent } from './visualizations/operators/throttle';
import { RxThrottleTimeComponent } from './visualizations/operators/throttle-time';
import { RxThrowIfEmptyComponent } from './visualizations/operators/throw-if-empty';
import { RxTimeIntervalComponent } from './visualizations/operators/time-interval';
import { RxTimeoutComponent } from './visualizations/operators/timeout';
import { RxTimeoutWithComponent } from './visualizations/operators/timeout-with';
import { RxTimestampComponent } from './visualizations/operators/timestamp';
import { RxToArrayComponent } from './visualizations/operators/to-array';
import { RxWindowComponent } from './visualizations/operators/window';
import { RxWindowCountComponent } from './visualizations/operators/window-count';
import { RxWindowTimeComponent } from './visualizations/operators/window-time';
import { RxWindowToggleComponent } from './visualizations/operators/window-toggle';
import { RxWindowWhenComponent } from './visualizations/operators/window-when';
import { RxWithLatestFromComponent } from './visualizations/operators/with-latest-from';
import { RxZipAllComponent } from './visualizations/operators/zip-all';

import { Marble } from './marble';

import { PrismHighlightModule } from 'ngx-prism-highlight';

@NgModule({
  declarations: [
    RxVisualizationsAppComponent,
    VisualizationsListComponent,
    VisualizationComponent,
    RxNavComponent,
    RxAuditComponent,
    RxAuditTimeComponent,
    RxBufferComponent,
    RxBufferCountComponent,
    RxBufferTimeComponent,
    RxBufferToggleComponent,
    RxBufferWhenComponent,
    RxCatchErrorComponent,
    RxCombineAllComponent,
    RxCombineLatestComponent,
    RxConcatAllComponent,
    RxConcatMapComponent,
    RxConcatMapToComponent,
    RxCountComponent,
    RxDebounceComponent,
    RxDebounceTimeComponent,
    RxDefaultIfEmptyComponent,
    RxDematerializeComponent,
    RxDelayComponent,
    RxDelayWhenComponent,
    RxDistinctComponent,
    RxDistinctUntilChangedComponent,
    RxDistinctUntilKeyChangedComponent,
    RxTapComponent,
    RxEndWithComponent,
    RxElementAtComponent,
    RxEveryComponent,
    RxExhaustComponent,
    RxExhaustMapComponent,
    RxExpandComponent,
    RxFilterComponent,
    RxFinalizeComponent,
    RxFindComponent,
    RxFindIndexComponent,
    RxFirstComponent,
    RxGroupByComponent,
    RxIgnoreElementsComponent,
    RxIsEmptyComponent,
    RxLastComponent,
    RxMapComponent,
    RxMapToComponent,
    RxMaterializeComponent,
    RxMaxComponent,
    RxMergeAllComponent,
    RxMergeMapComponent,
    RxMergeMapToComponent,
    RxMergeScanComponent,
    RxMinComponent,
    RxMulticastComponent,
    RxObserveOnComponent,
    RxOnErrorResumeNextComponent,
    RxPairwiseComponent,
    RxPartitionComponent,
    RxPluckComponent,
    RxPublishComponent,
    RxPublishBehaviorComponent,
    RxPublishLastComponent,
    RxPublishReplayComponent,
    RxReduceComponent,
    RxRefCountComponent,
    RxRepeatComponent,
    RxRepeatWhenComponent,
    RxRetryComponent,
    RxRetryWhenComponent,
    RxSampleComponent,
    RxSampleTimeComponent,
    RxScanComponent,
    RxSequenceEqualComponent,
    RxShareComponent,
    RxShareReplayComponent,
    RxSkipLastComponent,
    RxSingleComponent,
    RxSkipComponent,
    RxSkipUntilComponent,
    RxSkipWhileComponent,
    RxStartWithComponent,
    RxSubscribeOnComponent,
    RxSwitchAllComponent,
    RxSwitchMapComponent,
    RxSwitchMapToComponent,
    RxTakeComponent,
    RxTakeLastComponent,
    RxTakeUntilComponent,
    RxTakeWhileComponent,
    RxThrottleComponent,
    RxThrottleTimeComponent,
    RxThrowIfEmptyComponent,
    RxTimeIntervalComponent,
    RxTimeoutComponent,
    RxTimeoutWithComponent,
    RxTimestampComponent,
    RxToArrayComponent,
    RxWindowComponent,
    RxWindowCountComponent,
    RxWindowTimeComponent,
    RxWindowToggleComponent,
    RxWindowWhenComponent,
    RxWithLatestFromComponent,
    RxZipAllComponent,

    Marble,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrismHighlightModule,
    RouterModule.forRoot([
      {
        path: '**',
        component: VisualizationsListComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [RxVisualizationsAppComponent],
})
export class AppModule {}
