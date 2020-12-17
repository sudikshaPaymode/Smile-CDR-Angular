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

  it('if form is valid', () => {
    component.questionnaireFormGroup.controls['allergy'].setValue('yes')
    component.questionnaireFormGroup.controls['gender'].setValue('married')
    component.questionnaireFormGroup.controls['dateOfBirth'].setValue('date')
    component.questionnaireFormGroup.controls['countryOfBirth'].setValue('text')
    component.questionnaireFormGroup.controls['maritalStatus'].setValue('check')
    component.questionnaireFormGroup.controls['smokingHabit'].setValue('yes')
    component.questionnaireFormGroup.controls['drinkingHabit'].setValue('yes')
    expect(component.questionnaireFormGroup.valid).toBeTruthy();

  });
  it('if form is invalid', () => {
    component.questionnaireFormGroup.controls['allergy'].setValue('')
    component.questionnaireFormGroup.controls['gender'].setValue('')
    component.questionnaireFormGroup.controls['dateOfBirth'].setValue('')
    component.questionnaireFormGroup.controls['countryOfBirth'].setValue('')
    component.questionnaireFormGroup.controls['maritalStatus'].setValue('')
    component.questionnaireFormGroup.controls['smokingHabit'].setValue('')
    component.questionnaireFormGroup.controls['drinkingHabit'].setValue('')
    expect(component.questionnaireFormGroup.valid).toBeFalsy();

  });

});
