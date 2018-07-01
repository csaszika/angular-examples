import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBaseCardComponent } from './knowledge-base-card.component';

describe('KnowledgeBaseCardComponent', () => {
  let component: KnowledgeBaseCardComponent;
  let fixture: ComponentFixture<KnowledgeBaseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeBaseCardComponent ]
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
