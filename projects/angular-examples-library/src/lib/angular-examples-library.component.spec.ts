import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExamplesLibraryComponent } from './angular-examples-library.component';

describe('AngularExamplesLibraryComponent', () => {
  let component: AngularExamplesLibraryComponent;
  let fixture: ComponentFixture<AngularExamplesLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularExamplesLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularExamplesLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
