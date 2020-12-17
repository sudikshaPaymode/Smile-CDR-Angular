
import { Component, OnInit } from '@angular/core';
//import {ApiService} from '../../services/api-service.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  public questionnaireData: any = {};
  public maritalStatus: string = '';
  public questionnaireFormGroup: FormGroup;

  //constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    //this.getList();
    this.questionnaireFormGroup = new FormGroup({
      allergy: new FormControl(),
      gender: new FormControl(),
      dateOfBirth: new FormControl(),
      countryOfBirth: new FormControl(),
      maritalStatus: new FormControl(),
      smokingHabit: new FormControl(),
      drinkingHabit: new FormControl()
    });
  }

  public getFormControl(fieldName: string): AbstractControl | null {
    return this.questionnaireFormGroup.get(fieldName);
  }

  //private getList(): void {
    //this.questionnaireData= this.apiService.getListOfQuestionnaire();
  //}

  public getMaritalStatus(): void {
    this.maritalStatus= this.getFormControl('maritalStatus').value ? 'Married' :'Unmarried';
  }


}
