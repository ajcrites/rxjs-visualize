import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RxAuditComponent } from './visualizations/audit';
import { RxAuditTimeComponent } from './visualizations/audit-time';
import { RxBufferComponent } from './visualizations/buffer';
import { RxBufferCountComponent } from './visualizations/buffer-count';
import { RxBufferTimeComponent } from './visualizations/buffer-time';
import { RxBufferToggleComponent } from './visualizations/buffer-toggle';
import { RxBufferWhenComponent } from './visualizations/buffer-when';
import { RxCatchComponent } from './visualizations/catch';
import { RxCombineAllComponent } from './visualizations/combine-all';
import { RxCombineLatestComponent } from './visualizations/combine-latest';
import { RxConcatComponent } from './visualizations/concat';
import { RxConcatAllComponent } from './visualizations/concat-all';
import { RxConcatMapComponent } from './visualizations/concat-map';
import { RxConcatMapToComponent } from './visualizations/concat-map-to';
import { RxCountComponent } from './visualizations/count';
import { RxDebounceComponent } from './visualizations/debounce';
import { RxDebounceTimeComponent } from './visualizations/debounce-time';
import { RxDefaultIfEmptyComponent } from './visualizations/default-if-empty';
import { RxDelayComponent } from './visualizations/delay';
import { RxDelayWhenComponent } from './visualizations/delay-when';
import { RxDistinctComponent } from './visualizations/distinct';
import { RxDistinctUntilChangedComponent } from './visualizations/distinct-until-changed';
import { RxDistinctUntilKeyChangedComponent } from './visualizations/distinct-until-key-changed';
import { RxDoComponent } from './visualizations/do';
import { RxElementAtComponent } from './visualizations/element-at';
import { RxEveryComponent } from './visualizations/every';
import { RxExhaustComponent } from './visualizations/exhaust';
import { RxExhaustMapComponent } from './visualizations/exhaust-map';
import { RxExpandComponent } from './visualizations/expand';
import { RxFilterComponent } from './visualizations/filter';
import { RxFindComponent } from './visualizations/find';
import { RxFindIndexComponent } from './visualizations/find-index';
import { RxFirstComponent } from './visualizations/first';
import { RxGroupByComponent } from './visualizations/group-by';
import { RxIsEmptyComponent } from './visualizations/is-empty';
import { RxLastComponent } from './visualizations/last';
import { RxMapComponent } from './visualizations/map';
import { RxMapToComponent } from './visualizations/map-to';
import { RxMaxComponent } from './visualizations/max';
import { RxMergeComponent } from './visualizations/merge';
import { RxMergeAllComponent } from './visualizations/merge-all';
import { RxMergeMapComponent } from './visualizations/merge-map';
import { RxMergeMapToComponent } from './visualizations/merge-map-to';
import { RxMergeScanComponent } from './visualizations/merge-scan';
import { RxMinComponent } from './visualizations/min';
import { RxPairwiseComponent } from './visualizations/pairwise';
import { RxPartitionComponent } from './visualizations/partition';
import { RxPluckComponent } from './visualizations/pluck';
import { RxPublishComponent } from './visualizations/publish';
import { RxRaceComponent } from './visualizations/race';
import { RxReduceComponent } from './visualizations/reduce';
import { RxRepeatComponent } from './visualizations/repeat';
import { RxRepeatWhenComponent } from './visualizations/repeat-when';
import { RxRetryComponent } from './visualizations/retry';
import { RxRetryWhenComponent } from './visualizations/retry-when';
import { RxSampleComponent } from './visualizations/sample';
import { RxSampleTimeComponent } from './visualizations/sample-time';
import { RxScanComponent } from './visualizations/scan';
import { RxSequenceEqualComponent } from './visualizations/sequence-equal';
import { RxSingleComponent } from './visualizations/single';
import { RxSkipComponent } from './visualizations/skip';
import { RxSkipUntilComponent } from './visualizations/skip-until';
import { RxSkipWhileComponent } from './visualizations/skip-while';
import { RxStartWithComponent } from './visualizations/start-with';
import { RxSwitchComponent } from './visualizations/switch';
import { RxSwitchMapComponent } from './visualizations/switch-map';
import { RxSwitchMapToComponent } from './visualizations/switch-map-to';
import { RxTakeComponent } from './visualizations/take';
import { RxTakeLastComponent } from './visualizations/take-last';
import { RxTakeUntilComponent } from './visualizations/take-until';
import { RxTakeWhileComponent } from './visualizations/take-while';
import { RxThrottleComponent } from './visualizations/throttle';
import { RxThrottleTimeComponent } from './visualizations/throttle-time';
import { RxWindowComponent } from './visualizations/window';
import { RxWindowCountComponent } from './visualizations/window-count';
import { RxWindowToggleComponent } from './visualizations/window-toggle';
import { RxWindowWhenComponent } from './visualizations/window-when';
import { RxWithLatestFromComponent } from './visualizations/with-latest-from';

import { Marble } from './visualizations/marble';

import { PrismHighlightModule } from 'prism-highlight';

@NgModule({
  declarations: [
    AppComponent,
    RxAuditComponent,
    RxAuditTimeComponent,
    RxBufferComponent,
    RxBufferCountComponent,
    RxBufferTimeComponent,
    RxBufferToggleComponent,
    RxBufferWhenComponent,
    RxCatchComponent,
    RxCombineAllComponent,
    RxCombineLatestComponent,
    RxConcatComponent,
    RxConcatAllComponent,
    RxConcatMapComponent,
    RxConcatMapToComponent,
    RxCountComponent,
    RxDebounceComponent,
    RxDebounceTimeComponent,
    RxDefaultIfEmptyComponent,
    RxDelayComponent,
    RxDelayWhenComponent,
    RxDistinctComponent,
    RxDistinctUntilChangedComponent,
    RxDistinctUntilKeyChangedComponent,
    RxDoComponent,
    RxElementAtComponent,
    RxEveryComponent,
    RxExhaustComponent,
    RxExhaustMapComponent,
    RxExpandComponent,
    RxFilterComponent,
    RxFindComponent,
    RxFindIndexComponent,
    RxFirstComponent,
    RxGroupByComponent,
    RxIsEmptyComponent,
    RxLastComponent,
    RxMapComponent,
    RxMapToComponent,
    RxMaxComponent,
    RxMergeComponent,
    RxMergeAllComponent,
    RxMergeMapComponent,
    RxMergeMapToComponent,
    RxMergeScanComponent,
    RxMinComponent,
    RxPairwiseComponent,
    RxPartitionComponent,
    RxPluckComponent,
    RxPublishComponent,
    RxRaceComponent,
    RxReduceComponent,
    RxRepeatComponent,
    RxRepeatWhenComponent,
    RxRetryComponent,
    RxRetryWhenComponent,
    RxSampleComponent,
    RxSampleTimeComponent,
    RxScanComponent,
    RxSequenceEqualComponent,
    RxSingleComponent,
    RxSkipComponent,
    RxSkipUntilComponent,
    RxSkipWhileComponent,
    RxStartWithComponent,
    RxSwitchComponent,
    RxSwitchMapComponent,
    RxSwitchMapToComponent,
    RxTakeComponent,
    RxTakeLastComponent,
    RxTakeUntilComponent,
    RxTakeWhileComponent,
    RxThrottleComponent,
    RxThrottleTimeComponent,
    RxWindowComponent,
    RxWindowCountComponent,
    RxWindowToggleComponent,
    RxWindowWhenComponent,
    RxWithLatestFromComponent,

    Marble,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    PrismHighlightModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
