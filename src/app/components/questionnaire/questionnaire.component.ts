
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
  // public maritalStatus: string = '';
  public questionnaireFormGroup: FormGroup;

  //constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    //this.getList();
    this.questionnaireFormGroup = new FormGroup({
      allergy: new FormControl('',[Validators.required,Validators.minLength(2)]),
      gender: new FormControl('',[Validators.required]),
      dateOfBirth: new FormControl('',[Validators.required]),
      countryOfBirth: new FormControl('',[Validators.required]),
      maritalStatus: new FormControl('',[Validators.required]),
      smokingHabit: new FormControl('',[Validators.required]),
      drinkingHabit: new FormControl('',[Validators.required])
    });
  }

  public getFormControl(fieldName: string): AbstractControl | null {
    return this.questionnaireFormGroup.get(fieldName);
  }

  //private getList(): void {
    //this.questionnaireData= this.apiService.getListOfQuestionnaire();
  //}

  // public getMaritalStatus(): void {
  //   this.maritalStatus= this.getFormControl('maritalStatus').value ? 'Married' :'Unmarried';
  // }


  public onsubmit():void{
   // console.log("save");

  }
}
