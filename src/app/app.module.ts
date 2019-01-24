import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RxVisualizationsAppComponent } from './app.component';
import { VisualizationsListComponent } from './visualizations-list.component';
import { VisualizationComponent } from './visualization.component';
import { RxNavComponent } from './nav.component';

import { RxAuditComponent } from './visualizations/operators/audit';
import { RxAuditTimeComponent } from './visualizations/operators/auditTime';
import { RxBufferComponent } from './visualizations/operators/buffer';
import { RxBufferCountComponent } from './visualizations/operators/bufferCount';
import { RxBufferTimeComponent } from './visualizations/operators/bufferTime';
import { RxBufferToggleComponent } from './visualizations/operators/bufferToggle';
import { RxBufferWhenComponent } from './visualizations/operators/bufferWhen';
import { RxCatchErrorComponent } from './visualizations/operators/catchError';
import { RxCombineAllComponent } from './visualizations/operators/combineAll';
import { RxCombineLatestComponent } from './visualizations/operators/combineLatest';
import { RxConcatAllComponent } from './visualizations/operators/concatAll';
import { RxConcatMapComponent } from './visualizations/operators/concatMap';
import { RxConcatMapToComponent } from './visualizations/operators/concatMapTo';
import { RxCountComponent } from './visualizations/operators/count';
import { RxDebounceComponent } from './visualizations/operators/debounce';
import { RxDebounceTimeComponent } from './visualizations/operators/debounceTime';
import { RxDefaultIfEmptyComponent } from './visualizations/operators/defaultIfEmpty';
import { RxDematerializeComponent } from './visualizations/operators/dematerialize';
import { RxDelayComponent } from './visualizations/operators/delay';
import { RxDelayWhenComponent } from './visualizations/operators/delayWhen';
import { RxDistinctComponent } from './visualizations/operators/distinct';
import { RxDistinctUntilChangedComponent } from './visualizations/operators/distinctUntilChanged';
// tslint:disable-next-line:max-line-length
import { RxDistinctUntilKeyChangedComponent } from './visualizations/operators/distinctUntilKeyChanged';
import { RxTapComponent } from './visualizations/operators/tap';
import { RxEndWithComponent } from './visualizations/operators/endWith';
import { RxElementAtComponent } from './visualizations/operators/elementAt';
import { RxEveryComponent } from './visualizations/operators/every';
import { RxExhaustComponent } from './visualizations/operators/exhaust';
import { RxExhaustMapComponent } from './visualizations/operators/exhaustMap';
import { RxExpandComponent } from './visualizations/operators/expand';
import { RxFilterComponent } from './visualizations/operators/filter';
import { RxFinalizeComponent } from './visualizations/operators/finalize';
import { RxFindComponent } from './visualizations/operators/find';
import { RxFindIndexComponent } from './visualizations/operators/findIndex';
import { RxFirstComponent } from './visualizations/operators/first';
import { RxGroupByComponent } from './visualizations/operators/groupBy';
import { RxIgnoreElementsComponent } from './visualizations/operators/ignoreElements';
import { RxIsEmptyComponent } from './visualizations/operators/isEmpty';
import { RxLastComponent } from './visualizations/operators/last';
import { RxMapComponent } from './visualizations/operators/map';
import { RxMapToComponent } from './visualizations/operators/mapTo';
import { RxMaterializeComponent } from './visualizations/operators/materialize';
import { RxMaxComponent } from './visualizations/operators/max';
import { RxMergeAllComponent } from './visualizations/operators/mergeAll';
import { RxMergeMapComponent } from './visualizations/operators/mergeMap';
import { RxMergeMapToComponent } from './visualizations/operators/mergeMapTo';
import { RxMergeScanComponent } from './visualizations/operators/mergeScan';
import { RxMinComponent } from './visualizations/operators/min';
import { RxMulticastComponent } from './visualizations/operators/multicast';
import { RxObserveOnComponent } from './visualizations/operators/observeOn';
import { RxOnErrorResumeNextComponent } from './visualizations/operators/onErrorResumeNext';
import { RxPairwiseComponent } from './visualizations/operators/pairwise';
import { RxPartitionComponent } from './visualizations/operators/partition';
import { RxPluckComponent } from './visualizations/operators/pluck';
import { RxPublishComponent } from './visualizations/operators/publish';
import { RxPublishBehaviorComponent } from './visualizations/operators/publishBehavior';
import { RxPublishLastComponent } from './visualizations/operators/publishLast';
import { RxPublishReplayComponent } from './visualizations/operators/publishReplay';
import { RxReduceComponent } from './visualizations/operators/reduce';
import { RxRefCountComponent } from './visualizations/operators/refCount';
import { RxRepeatComponent } from './visualizations/operators/repeat';
import { RxRepeatWhenComponent } from './visualizations/operators/repeatWhen';
import { RxRetryComponent } from './visualizations/operators/retry';
import { RxRetryWhenComponent } from './visualizations/operators/retryWhen';
import { RxSampleComponent } from './visualizations/operators/sample';
import { RxSampleTimeComponent } from './visualizations/operators/sampleTime';
import { RxScanComponent } from './visualizations/operators/scan';
import { RxSequenceEqualComponent } from './visualizations/operators/sequenceEqual';
import { RxShareComponent } from './visualizations/operators/share';
import { RxShareReplayComponent } from './visualizations/operators/shareReplay';
import { RxSingleComponent } from './visualizations/operators/single';
import { RxSkipLastComponent } from './visualizations/operators/skipLast';
import { RxSkipUntilComponent } from './visualizations/operators/skipUntil';
import { RxSkipWhileComponent } from './visualizations/operators/skipWhile';
import { RxSkipComponent } from './visualizations/operators/skip';
import { RxStartWithComponent } from './visualizations/operators/startWith';
import { RxSubscribeOnComponent } from './visualizations/operators/subscribeOn';
import { RxSwitchAllComponent } from './visualizations/operators/switchAll';
import { RxSwitchMapComponent } from './visualizations/operators/switchMap';
import { RxSwitchMapToComponent } from './visualizations/operators/switchMapTo';
import { RxTakeComponent } from './visualizations/operators/take';
import { RxTakeLastComponent } from './visualizations/operators/takeLast';
import { RxTakeUntilComponent } from './visualizations/operators/takeUntil';
import { RxTakeWhileComponent } from './visualizations/operators/takeWhile';
import { RxThrottleComponent } from './visualizations/operators/throttle';
import { RxThrottleTimeComponent } from './visualizations/operators/throttleTime';
import { RxThrowIfEmptyComponent } from './visualizations/operators/throwIfEmpty';
import { RxTimeIntervalComponent } from './visualizations/operators/timeInterval';
import { RxTimeoutComponent } from './visualizations/operators/timeout';
import { RxTimeoutWithComponent } from './visualizations/operators/timeoutWith';
import { RxTimestampComponent } from './visualizations/operators/timestamp';
import { RxToArrayComponent } from './visualizations/operators/toArray';
import { RxWindowComponent } from './visualizations/operators/window';
import { RxWindowCountComponent } from './visualizations/operators/windowCount';
import { RxWindowTimeComponent } from './visualizations/operators/windowTime';
import { RxWindowToggleComponent } from './visualizations/operators/windowToggle';
import { RxWindowWhenComponent } from './visualizations/operators/windowWhen';
import { RxWithLatestFromComponent } from './visualizations/operators/withLatestFrom';
import { RxZipAllComponent } from './visualizations/operators/zipAll';

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
