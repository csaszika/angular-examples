import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SithFormComponent } from './sith-form.component';

describe('SithFormComponent', () => {
  let component: SithFormComponent;
  let fixture: ComponentFixture<SithFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SithFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SithFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
