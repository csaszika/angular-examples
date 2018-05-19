import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JediFormComponent} from './jedi-form/jedi-form.component';

const routes: Routes = [
  { path: 'jedi-form', component: JediFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'jedi-form' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsExamplesRoutingModule { }
