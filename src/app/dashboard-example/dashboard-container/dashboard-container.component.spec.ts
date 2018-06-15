
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import {DashboardContainer} from './dashboard-container.component';

describe('DashboardContainer', () => {
  let component: DashboardContainer;
  let fixture: ComponentFixture<DashboardContainer>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
