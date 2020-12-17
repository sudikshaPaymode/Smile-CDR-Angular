import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import{ReactiveFormsModule} from "@angular/forms";

import { QuestionnaireComponent } from './questionnaire.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireComponent;
  let fixture: ComponentFixture<QuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ QuestionnaireComponent ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });





});
