import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JediFormComponent} from './jedi-form/jedi-form.component';
import {FormsContainerComponent} from './forms-container/forms-container.component';
import {SithFormComponent} from './sith-form/sith-form.component';

const routes: Routes = [
  {
    path: '',
    component: FormsContainerComponent,
    children: [
      { path: 'jedi-form', component: JediFormComponent},
      { path: 'sith-form', component: SithFormComponent},
      { path: '', pathMatch: 'full', redirectTo: 'jedi-form' }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsExamplesRoutingModule { }
