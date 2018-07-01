import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularElementsContainerComponent} from './angular-elements-container/angular-elements-container.component';

const routes: Routes = [
  {
    path: '',
    component: AngularElementsContainerComponent,
    data: { state: 'angular-elements' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularElementsRoutingModule { }
