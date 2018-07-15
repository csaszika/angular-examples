import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentOutletContainerComponent } from './ng-component-outlet-container.component';

describe('NgComponentOutletContainerComponent', () => {
  let component: NgComponentOutletContainerComponent;
  let fixture: ComponentFixture<NgComponentOutletContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgComponentOutletContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgComponentOutletContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
