import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBaseCardComponent } from './knowledge-base-card.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('KnowledgeBaseCardComponent', () => {
  let component: KnowledgeBaseCardComponent;
  let fixture: ComponentFixture<KnowledgeBaseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeBaseCardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeBaseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
