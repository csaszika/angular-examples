import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgTemplateOutletRoutingModule} from './ng-template-outlet-routing.module';
import {NgTemplateOutletContainerComponent} from './ng-template-outlet-container/ng-template-outlet-container.component';
import {HeroCardComponent} from './hero-card/hero-card.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {HeroSummaryPipe} from './pipes/hero-summary.pipe';

@NgModule({
  imports: [
    CommonModule,
    NgTemplateOutletRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    NgTemplateOutletContainerComponent,
    HeroCardComponent,
    HeroSummaryPipe
  ]
})
export class NgTemplateOutletModule { }
