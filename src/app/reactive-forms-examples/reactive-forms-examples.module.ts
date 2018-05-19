import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {JediFormComponent} from './jedi-form/jedi-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormsExamplesRoutingModule} from './reactive-forms-examples-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsExamplesRoutingModule
  ],
  declarations: [JediFormComponent]
})
export class ReactiveFormsExamplesModule { }
