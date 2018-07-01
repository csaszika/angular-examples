import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularElementsContainerComponent } from './angular-elements-container.component';

describe('AngularElementsContainerComponent', () => {
  let component: AngularElementsContainerComponent;
  let fixture: ComponentFixture<AngularElementsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularElementsContainerComponent ]
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
