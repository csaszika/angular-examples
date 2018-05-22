import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShellComponent} from './main/shell/shell.component';
import {HomeComponent} from './main/home/home.component';
import {PageNotFoundComponent} from './main/page-not-found/page-not-found.component';


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
      { path: '', pathMatch: 'full', redirectTo: 'home' }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
