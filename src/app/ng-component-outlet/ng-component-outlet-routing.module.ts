import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgComponentOutletContainerComponent} from './ng-component-outlet-container/ng-component-outlet-container.component';

const routes: Routes = [
  {
    path: '',
    component: NgComponentOutletContainerComponent,
    data: {state: 'ng-component-outlet'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgComponentOutletRoutingModule { }
