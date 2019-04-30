import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RxjsVisualizeMarbleComponent } from './rxjs-visualize-marble.component';

@NgModule({
  declarations: [RxjsVisualizeMarbleComponent],
  imports: [CommonModule],
  exports: [RxjsVisualizeMarbleComponent],
})
export class RxjsVisualizeMarbleModule {}
