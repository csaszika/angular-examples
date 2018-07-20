import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsContainerComponent } from './forms-container.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('FormsContainerComponent', () => {
  let component: FormsContainerComponent;
  let fixture: ComponentFixture<FormsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsContainerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
