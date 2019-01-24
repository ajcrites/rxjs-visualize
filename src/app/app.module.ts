import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RxVisualizationsAppComponent } from './app.component';
import { VisualizationsListComponent } from './visualizations-list.component';
import { VisualizationComponent } from './visualization.component';
import { RxNavComponent } from './nav.component';

import { RxAuditComponent } from './visualizations/audit';
import { RxAuditTimeComponent } from './visualizations/audit-time';
import { RxBufferComponent } from './visualizations/buffer';
import { RxBufferCountComponent } from './visualizations/buffer-count';
import { RxBufferTimeComponent } from './visualizations/buffer-time';
import { RxBufferToggleComponent } from './visualizations/buffer-toggle';
import { RxBufferWhenComponent } from './visualizations/buffer-when';
import { RxCatchErrorComponent } from './visualizations/catch-error';
import { RxCombineAllComponent } from './visualizations/combine-all';
import { RxCombineLatestComponent } from './visualizations/combine-latest';
import { RxConcatAllComponent } from './visualizations/concat-all';
import { RxConcatMapComponent } from './visualizations/concat-map';
import { RxConcatMapToComponent } from './visualizations/concat-map-to';
import { RxCountComponent } from './visualizations/count';
import { RxDebounceComponent } from './visualizations/debounce';
import { RxDebounceTimeComponent } from './visualizations/debounce-time';
import { RxDefaultIfEmptyComponent } from './visualizations/default-if-empty';
import { RxDematerializeComponent } from './visualizations/dematerialize';
import { RxDelayComponent } from './visualizations/delay';
import { RxDelayWhenComponent } from './visualizations/delay-when';
import { RxDistinctComponent } from './visualizations/distinct';
import { RxDistinctUntilChangedComponent } from './visualizations/distinct-until-changed';
import { RxDistinctUntilKeyChangedComponent } from './visualizations/distinct-until-key-changed';
import { RxTapComponent } from './visualizations/tap';
import { RxEndWithComponent } from './visualizations/end-with';
import { RxElementAtComponent } from './visualizations/element-at';
import { RxEveryComponent } from './visualizations/every';
import { RxExhaustComponent } from './visualizations/exhaust';
import { RxExhaustMapComponent } from './visualizations/exhaust-map';
import { RxExpandComponent } from './visualizations/expand';
import { RxFilterComponent } from './visualizations/filter';
import { RxFinalizeComponent } from './visualizations/finalize';
import { RxFindComponent } from './visualizations/find';
import { RxFindIndexComponent } from './visualizations/find-index';
import { RxFirstComponent } from './visualizations/first';
import { RxGroupByComponent } from './visualizations/group-by';
import { RxIgnoreElementsComponent } from './visualizations/ignore-elements';
import { RxIsEmptyComponent } from './visualizations/is-empty';
import { RxLastComponent } from './visualizations/last';
import { RxMapComponent } from './visualizations/map';
import { RxMapToComponent } from './visualizations/map-to';
import { RxMaterializeComponent } from './visualizations/materialize';
import { RxMaxComponent } from './visualizations/max';
import { RxMergeAllComponent } from './visualizations/merge-all';
import { RxMergeMapComponent } from './visualizations/merge-map';
import { RxMergeMapToComponent } from './visualizations/merge-map-to';
import { RxMergeScanComponent } from './visualizations/merge-scan';
import { RxMinComponent } from './visualizations/min';
import { RxMulticastComponent } from './visualizations/multicast';
import { RxObserveOnComponent } from './visualizations/observe-on';
import { RxOnErrorResumeNextComponent } from './visualizations/on-error-resume-next';
import { RxPairwiseComponent } from './visualizations/pairwise';
import { RxPartitionComponent } from './visualizations/partition';
import { RxPluckComponent } from './visualizations/pluck';
import { RxPublishComponent } from './visualizations/publish';
import { RxPublishBehaviorComponent } from './visualizations/publish-behavior';
import { RxPublishLastComponent } from './visualizations/publish-last';
import { RxPublishReplayComponent } from './visualizations/publish-replay';
import { RxReduceComponent } from './visualizations/reduce';
import { RxRefCountComponent } from './visualizations/ref-count';
import { RxRepeatComponent } from './visualizations/repeat';
import { RxRepeatWhenComponent } from './visualizations/repeat-when';
import { RxRetryComponent } from './visualizations/retry';
import { RxRetryWhenComponent } from './visualizations/retry-when';
import { RxSampleComponent } from './visualizations/sample';
import { RxSampleTimeComponent } from './visualizations/sample-time';
import { RxScanComponent } from './visualizations/scan';
import { RxSequenceEqualComponent } from './visualizations/sequence-equal';
import { RxShareReplayComponent } from './visualizations/share-replay';
import { RxSingleComponent } from './visualizations/single';
import { RxSkipLastComponent } from './visualizations/skip-last';
import { RxSkipUntilComponent } from './visualizations/skip-until';
import { RxSkipWhileComponent } from './visualizations/skip-while';
import { RxSkipComponent } from './visualizations/skip';
import { RxStartWithComponent } from './visualizations/start-with';
import { RxSubscribeOnComponent } from './visualizations/subscribe-on';
import { RxSwitchAllComponent } from './visualizations/switch-all';
import { RxSwitchMapComponent } from './visualizations/switch-map';
import { RxSwitchMapToComponent } from './visualizations/switch-map-to';
import { RxTakeComponent } from './visualizations/take';
import { RxTakeLastComponent } from './visualizations/take-last';
import { RxTakeUntilComponent } from './visualizations/take-until';
import { RxTakeWhileComponent } from './visualizations/take-while';
import { RxThrottleComponent } from './visualizations/throttle';
import { RxThrottleTimeComponent } from './visualizations/throttle-time';
import { RxThrowIfEmptyComponent } from './visualizations/throw-if-empty';
import { RxTimeIntervalComponent } from './visualizations/time-interval';
import { RxTimeoutComponent } from './visualizations/timeout';
import { RxTimeoutWithComponent } from './visualizations/timeout-with';
import { RxTimestampComponent } from './visualizations/timestamp';
import { RxToArrayComponent } from './visualizations/to-array';
import { RxWindowComponent } from './visualizations/window';
import { RxWindowCountComponent } from './visualizations/window-count';
import { RxWindowTimeComponent } from './visualizations/window-time';
import { RxWindowToggleComponent } from './visualizations/window-toggle';
import { RxWindowWhenComponent } from './visualizations/window-when';
import { RxWithLatestFromComponent } from './visualizations/with-latest-from';
import { RxZipAllComponent } from './visualizations/zip-all';

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
