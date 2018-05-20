import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {JediFormComponent} from './jedi-form/jedi-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormsExamplesRoutingModule} from './reactive-forms-examples-routing.module';
import {FormsContainerComponent} from './forms-container/forms-container.component';
import {SithFormComponent} from './sith-form/sith-form.component';
import {MatButtonModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsExamplesRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule
  ],
  declarations: [JediFormComponent, FormsContainerComponent, SithFormComponent]
})
export class ReactiveFormsExamplesModule { }
