import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AngularElementsRoutingModule} from './angular-elements-routing.module';
import {AngularElementsContainerComponent} from './angular-elements-container/angular-elements-container.component';
import {KnowledgeBaseCardComponent} from './knowledge-base-card/knowledge-base-card.component';

@NgModule({
  imports: [
    CommonModule,
    AngularElementsRoutingModule
  ],
  declarations: [
    AngularElementsContainerComponent,
    KnowledgeBaseCardComponent
  ],
  entryComponents: [KnowledgeBaseCardComponent]
})
export class AngularElementsModule {}
