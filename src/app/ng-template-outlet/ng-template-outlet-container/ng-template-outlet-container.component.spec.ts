import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateOutletContainerComponent } from './ng-template-outlet-container.component';

describe('NgTemplateOutletContainerComponent', () => {
  let component: NgTemplateOutletContainerComponent;
  let fixture: ComponentFixture<NgTemplateOutletContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateOutletContainerComponent ]
    })
    .compileComponents();
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
