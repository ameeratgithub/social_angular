import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { ProfilePostsComponent } from './profile-posts/profile-posts.component';
import { ProfileBooksComponent } from './profile-books/profile-books.component';
import { ProfileProjectsComponent } from './profile-projects/profile-projects.component';
import { ProfileQuestionsComponent } from './profile-questions/profile-questions.component';


const routes: Routes = [
  {
    path: ':id', component: UserProfileComponent, children: [
      { path: '', component: ProfilePostsComponent },
      { path: 'questions', component: ProfileQuestionsComponent },
      { path: 'books', component: ProfileBooksComponent },
      { path: 'projects', component: ProfileProjectsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
