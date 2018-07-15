import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgComponentOutletRoutingModule } from './ng-component-outlet-routing.module';
import { NgComponentOutletContainerComponent } from './ng-component-outlet-container/ng-component-outlet-container.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {MatButtonModule, MatInputModule, MatTabsModule} from '@angular/material';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    NgComponentOutletRoutingModule
  ],
  declarations: [
    NgComponentOutletContainerComponent,
    RegistrationFormComponent,
    RegistrationDetailsComponent
  ],
  entryComponents: [
    RegistrationFormComponent,
    RegistrationDetailsComponent
  ]
})
export class NgComponentOutletModule { }
