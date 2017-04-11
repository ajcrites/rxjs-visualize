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

import { Marble } from './visualizations/marble';

@NgModule({
  declarations: [
    AppComponent,
    RxAuditComponent,
    RxAuditTimeComponent,
    RxBufferComponent,
    RxBufferCountComponent,
    RxBufferTimeComponent,
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
