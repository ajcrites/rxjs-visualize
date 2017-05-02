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

import { Marble } from './visualizations/marble';

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

    Marble,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
