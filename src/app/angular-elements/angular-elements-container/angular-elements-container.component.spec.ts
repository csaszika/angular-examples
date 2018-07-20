import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularElementsContainerComponent } from './angular-elements-container.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AngularElementsContainerComponent', () => {
  let component: AngularElementsContainerComponent;
  let fixture: ComponentFixture<AngularElementsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularElementsContainerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularElementsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
