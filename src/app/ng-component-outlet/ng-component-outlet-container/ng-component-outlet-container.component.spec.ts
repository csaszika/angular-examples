import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentOutletContainerComponent } from './ng-component-outlet-container.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('NgComponentOutletContainerComponent', () => {
  let component: NgComponentOutletContainerComponent;
  let fixture: ComponentFixture<NgComponentOutletContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgComponentOutletContainerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgComponentOutletContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
