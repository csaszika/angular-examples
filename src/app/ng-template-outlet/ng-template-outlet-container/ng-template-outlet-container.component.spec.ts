import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateOutletContainerComponent } from './ng-template-outlet-container.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HeroSummaryPipe} from '../pipes/hero-summary.pipe';

describe('NgTemplateOutletContainerComponent', () => {
  let component: NgTemplateOutletContainerComponent;
  let fixture: ComponentFixture<NgTemplateOutletContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgTemplateOutletContainerComponent,
        HeroSummaryPipe
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateOutletContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
