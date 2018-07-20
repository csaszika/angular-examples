import {fakeAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevTeamTableComponent} from './dev-team-table.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('DevTeamTableComponent', () => {
  let component: DevTeamTableComponent;
  let fixture: ComponentFixture<DevTeamTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DevTeamTableComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(DevTeamTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
