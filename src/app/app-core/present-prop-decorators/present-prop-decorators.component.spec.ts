import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentPropDecoratorsComponent } from './present-prop-decorators.component';

describe('PresentPropDecoratorsComponent', () => {
  let component: PresentPropDecoratorsComponent;
  let fixture: ComponentFixture<PresentPropDecoratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentPropDecoratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentPropDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
