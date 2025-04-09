import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppSearchComponent } from './app-search/app-search.component';
import { UsersListCardComponent } from '../shared/searchables/users-list-card/users-list-card.component';
import { PostsListComponent } from '../shared_modules/posts/posts-list/posts-list.component';
import { AllResultsComponent } from './app-search/all-results/all-results.component';
import { VideosListComponent } from '../shared_modules/posts/videos-list/videos-list.component';
import { ImagesListComponent } from '../shared_modules/posts/images-list/images-list.component';
import { UniversitiesListComponent } from '../shared_modules/universities-list/universities-list/universities-list.component';
import { SearchQuestionsResultsComponent } from './search-questions-results/search-questions-results.component';
import { SearchUniversitiesResultsComponent } from './search-universities-results/search-universities-results.component';

const routes: Routes = [
  {
    path: '', component: AppSearchComponent, children: [
      { path: '', component: AllResultsComponent },
      { path: 'people', component: UsersListCardComponent },
      { path: 'posts', component: PostsListComponent },
      { path: 'pictures', component: ImagesListComponent },
      { path: 'videos', component: VideosListComponent },
      { path: 'questions', component: SearchQuestionsResultsComponent },
      { path: 'universities', component: SearchUniversitiesResultsComponent },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
