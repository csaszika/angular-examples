import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevTeamFormComponent} from './dev-team-form.component';

describe('DevTeamFormComponent', () => {
  let component: DevTeamFormComponent;
  let fixture: ComponentFixture<DevTeamFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DevTeamFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevTeamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
