import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskQuestionComponent } from './questions/ask-question/ask-question.component';
import { SharedModule } from '../shared/shared.module';
import { NgxTinymceModule } from 'ngx-tinymce';
import { BlogInputComponent } from './blog-input/blog-input.component';
import { EditQuestionComponent } from './questions/edit-question/edit-question.component';
import { EditAnswerComponent } from './answers/edit-answer/edit-answer.component';
import { ProvideAnswerComponent } from './answers/provide-answer/provide-answer.component';
import { QuestionDetailsComponent } from './questions/question-details/question-details.component';
import { QuestionDetailsItemComponent } from './question-details-item/question-details-item.component';
import { DetailsCommentComponent } from './details-comment/details-comment.component';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogQuestionsComponent } from './blog-questions/blog-questions.component';
import { QuestionsListModule } from '../shared_modules/questions-list/questions-list.module';
import { ExploreQuestionsComponent } from './explore-questions/explore-questions.component';

@NgModule({
  declarations: [
    AskQuestionComponent,
    BlogInputComponent,
    EditQuestionComponent,
    EditAnswerComponent,
    ProvideAnswerComponent,
    QuestionDetailsComponent,
    QuestionDetailsItemComponent,
    DetailsCommentComponent,
    BlogQuestionsComponent,
    ExploreQuestionsComponent,
  ],
  imports: [
    CommonModule, SharedModule, BlogRoutingModule ,NgxTinymceModule.forRoot({
      baseURL: '/assets/tinymce/'
    }),
    QuestionsListModule
  ],

})
export class BlogModule { }
