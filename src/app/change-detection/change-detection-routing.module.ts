import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChangeDetectionContainerComponent} from './change-detection-container/change-detection-container.component';
import {DefaultChangeDetectionComponent} from './sub-modules/default-change-detection';
import {OnPushChangeDetectionComponent} from './sub-modules/on-push-change-detection';
import {ManualChangeDetectionComponent} from './sub-modules/manual-change-detection';
import {OnPushChangeDetectionObservablesComponent} from './sub-modules/on-push-change-detection-observables';

const routes: Routes = [
  {
    path: '',
    component: ChangeDetectionContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'default-change-detection',
        pathMatch: 'full'
      },
      {
        path: 'default-change-detection',
        component: DefaultChangeDetectionComponent, data: { state: 'jedi-form' }
      },
      {
        path: 'on-push-change-detection',
        component: OnPushChangeDetectionComponent, data: { state: 'jedi-form' }
      },
      {
        path: 'on-push-change-detection-observables',
        component: OnPushChangeDetectionObservablesComponent, data: { state: 'jedi-form' }
      },
      {
        path: 'manual-change-detection',
        component: ManualChangeDetectionComponent, data: { state: 'jedi-form' }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectionRoutingModule { }
