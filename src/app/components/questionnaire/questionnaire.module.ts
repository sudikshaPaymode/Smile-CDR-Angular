import {QuestionnaireComponent} from './questionnaire.component';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [QuestionnaireComponent],
  exports: [QuestionnaireComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class QuestionnaireModule {
}
