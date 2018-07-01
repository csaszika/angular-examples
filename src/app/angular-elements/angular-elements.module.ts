import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AngularElementsRoutingModule} from './angular-elements-routing.module';
import {AngularElementsContainerComponent} from './angular-elements-container/angular-elements-container.component';
import {KnowledgeBaseCardComponent} from './knowledge-base-card/knowledge-base-card.component';
import {createCustomElement} from '@angular/elements';

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
export class AngularElementsModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(KnowledgeBaseCardComponent, {injector: this.injector});
    /**
     * Bug or feature has been found.
     * If you the component as a component then you will use <knowledge-base-card>.
     * If you define an element with the same name as component tag then you will
     * expect error: Cannot read property 'nativeNode' of null at removeDebugNodeFromIndex...
     */
    customElements.define('knowledge-base-card-element', element);
  }
}
