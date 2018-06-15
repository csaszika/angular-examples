import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgTemplateOutletContainerComponent} from './ng-template-outlet-container/ng-template-outlet-container.component';

const routes: Routes = [
  {path: '', component: NgTemplateOutletContainerComponent, data: {state: 'ng-template-outlet'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgTemplateOutletRoutingModule { }
