import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChangeDetectionContainerComponent } from './change-detection-container/change-detection-container.component';
import {DefaultChangeDetectionModule} from './sub-modules/default-change-detection';
import {ManualChangeDetectionModule} from './sub-modules/manual-change-detection';
import {OnPushChangeDetectionModule} from './sub-modules/on-push-change-detection';
import {OnPushChangeDetectionObservablesModule} from './sub-modules/on-push-change-detection-observables';
import {ToggleStateService} from './services/toggle-state/toggle-state.service';

@NgModule({
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule,
    DefaultChangeDetectionModule,
    ManualChangeDetectionModule,
    OnPushChangeDetectionModule,
    OnPushChangeDetectionObservablesModule
  ],
  declarations: [ChangeDetectionContainerComponent],
  providers: [
    ToggleStateService
  ]
})
export class ChangeDetectionModule { }
