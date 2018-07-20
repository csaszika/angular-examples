
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import {DashboardContainerComponent} from './dashboard-container.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('DashboardContainerComponent', () => {
  let component: DashboardContainerComponent;
  let fixture: ComponentFixture<DashboardContainerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardContainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(DashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
