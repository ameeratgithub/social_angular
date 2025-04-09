import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskQuestionComponent } from './questions/ask-question/ask-question.component';
import { QuestionDetailsComponent } from './questions/question-details/question-details.component';
import { EditQuestionComponent } from './questions/edit-question/edit-question.component';
import { ProvideAnswerComponent } from './answers/provide-answer/provide-answer.component';
import { EditAnswerComponent } from './answers/edit-answer/edit-answer.component';
import { BlogQuestionsComponent } from './blog-questions/blog-questions.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'questions', pathMatch: 'full',
  },
  {
    path: 'questions', children: [
      { path: '', component: BlogQuestionsComponent },
      { path: 'ask', component: AskQuestionComponent },
      { path: ':id', component: QuestionDetailsComponent },
      { path: ':id/edit', component: EditQuestionComponent },
      { path: ':id/provideanswer', component: ProvideAnswerComponent },
    ]
  },
  { path: 'answers/:id/edit', component: EditAnswerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
