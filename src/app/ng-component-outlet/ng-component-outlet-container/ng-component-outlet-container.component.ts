import {Component, OnInit} from '@angular/core';
import {RegistrationFormComponent} from '../registration-form/registration-form.component';
import {RegistrationDetailsComponent} from '../registration-details/registration-details.component';

@Component({
  selector: 'app-ng-component-outlet-container',
  templateUrl: './ng-component-outlet-container.component.html',
  styleUrls: ['./ng-component-outlet-container.component.scss']
})
export class NgComponentOutletContainerComponent implements OnInit {

  dynamicTabs = [
    {
      label: 'Registration',
      component: RegistrationFormComponent
    },
    {
      label: 'Details',
      component: RegistrationDetailsComponent
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
