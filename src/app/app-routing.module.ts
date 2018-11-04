import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ShellComponent} from './app-core/shell/shell.component';
import {HomeComponent} from './app-core/home/home.component';
import {PageNotFoundComponent} from './app-core/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'home', component: HomeComponent, data: { state: 'home' } },
      {
        path: 'reactive-forms',
        loadChildren: './reactive-forms/reactive-forms-examples.module#ReactiveFormsExamplesModule'
      },
      {
        path: 'dashboard-example',
        loadChildren: './dashboard-example/dashboard-example.module#DashboardExampleModule'
      },
      {
        path: 'ng-template-outlet',
        loadChildren: './ng-template-outlet/ng-template-outlet.module#NgTemplateOutletModule'
      },
      {
        path: 'ng-component-outlet',
        loadChildren: './ng-component-outlet/ng-component-outlet.module#NgComponentOutletModule'
      },
      {
        path: 'angular-elements',
        loadChildren: './angular-elements/angular-elements.module#AngularElementsModule'
      },
      { path: '', pathMatch: 'full', redirectTo: 'home' }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
