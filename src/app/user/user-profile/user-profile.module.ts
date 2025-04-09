import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileRoutingModule } from './user-profile-routing.module';

import { UserProfileComponent } from './user-profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileContentComponent } from './profile-content/profile-content.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsModule } from 'src/app/shared_modules/posts/posts.module';
import { ProfilePostsComponent } from './profile-posts/profile-posts.component';
import { ProfileBooksComponent } from './profile-books/profile-books.component';
import { ProfileProjectsComponent } from './profile-projects/profile-projects.component';
import { ProfileQuestionsComponent } from './profile-questions/profile-questions.component';
import { QuestionsListModule } from 'src/app/shared_modules/questions-list/questions-list.module';
import { BooksListModule } from 'src/app/shared_modules/books-list/books-list.module';
import { ProjectsListModule } from 'src/app/shared_modules/projects-list/projects-list.module';

@NgModule({
  declarations: [
    UserProfileComponent, ProfileHeaderComponent, ProfileContentComponent, ProfilePostsComponent,
    ProfileBooksComponent, ProfileProjectsComponent, ProfileQuestionsComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule,
    PostsModule,
    QuestionsListModule,
    BooksListModule,
    ProjectsListModule
  ]
})
export class UserProfileModule { }
