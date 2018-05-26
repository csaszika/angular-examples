import {fakeAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevTeamTableComponent} from './dev-team-table.component';

describe('DevTeamTableComponent', () => {
  let component: DevTeamTableComponent;
  let fixture: ComponentFixture<DevTeamTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DevTeamTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DevTeamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
