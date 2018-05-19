import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JediFormComponent } from './jedi-form.component';

describe('JediFormComponent', () => {
  let component: JediFormComponent;
  let fixture: ComponentFixture<JediFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JediFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JediFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
