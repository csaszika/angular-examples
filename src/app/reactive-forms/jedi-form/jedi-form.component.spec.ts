import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JediFormComponent } from './jedi-form.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

describe('JediFormComponent', () => {
  let component: JediFormComponent;
  let fixture: ComponentFixture<JediFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ JediFormComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JediFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
