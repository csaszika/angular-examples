import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevTeamFormComponent} from './dev-team-form.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';

describe('DevTeamFormComponent', () => {
  let component: DevTeamFormComponent;
  let fixture: ComponentFixture<DevTeamFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, StoreModule],
      declarations: [DevTeamFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevTeamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
