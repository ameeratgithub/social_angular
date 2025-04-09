import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionItemComponent } from './questions-list/question-item/question-item.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    QuestionsListComponent,
    QuestionItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    QuestionsListComponent,
    QuestionItemComponent,
  ]
})
export class QuestionsListModule { }
