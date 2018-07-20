import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevGraphComponent} from './dev-graph.component';
import {StoreModule} from '@ngrx/store';

describe('DevGraphComponent', () => {
  let component: DevGraphComponent;
  let fixture: ComponentFixture<DevGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DevGraphComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
