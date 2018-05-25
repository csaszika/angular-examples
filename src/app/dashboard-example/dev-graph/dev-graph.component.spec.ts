import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevGraphComponent} from './dev-graph.component';

describe('DevGraphComponent', () => {
  let component: DevGraphComponent;
  let fixture: ComponentFixture<DevGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DevGraphComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
