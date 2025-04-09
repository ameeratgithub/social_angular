import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';

import { AppSearchComponent } from './app-search/app-search.component';
import { AllResultsComponent } from './app-search/all-results/all-results.component';
import { PostsModule } from '../shared_modules/posts/posts.module';

import { SharedModule } from '../shared/shared.module';
import { QuestionsListModule } from '../shared_modules/questions-list/questions-list.module';
import { UniversitiesListModule } from '../shared_modules/universities-list/universities-list.module';
import { SearchUsersComponent } from './search-users/search-users.component';
import { SearchPostsComponent } from './search-posts/search-posts.component';
import { SearchQuestionsComponent } from './search-questions/search-questions.component';
import { SearchUniversitiesComponent } from './search-universities/search-universities.component';
import { SearchQuestionsResultsComponent } from './search-questions-results/search-questions-results.component';
import { SearchUniversitiesResultsComponent } from './search-universities-results/search-universities-results.component';

@NgModule({
  declarations: [
    AppSearchComponent,
    AllResultsComponent,
    SearchUsersComponent,
    SearchPostsComponent,
    SearchQuestionsComponent,
    SearchUniversitiesComponent,
    SearchUniversitiesResultsComponent,
    SearchQuestionsResultsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule, 
    SearchRoutingModule,
    PostsModule,
    QuestionsListModule,
    UniversitiesListModule    
  ]
})
export class SearchModule { }
