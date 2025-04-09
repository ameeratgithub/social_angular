import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampusesListComponent } from './campuses-list/campuses-list.component';
import { LibraryComponent } from './library/library.component';
import { LibraryBookComponent } from './library/library-book/library-book.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { SectionComponent } from './section/section.component';
import { CourseRegistrationComponent } from './teacher/course-registration/course-registration.component';
import { CourseComponent } from './section/course/course.component';
import { UniversitiesListComponent } from '../shared_modules/universities-list/universities-list/universities-list.component';
import { UniversityProjectsComponent } from './university-projects/university-projects.component';

const routes: Routes = [
  { path: '', component: SectionComponent },
  {
    path: 'universities', children: [
      { path: '', component: UniversitiesListComponent },
      { path: ':id/campuses', component: CampusesListComponent },
      
    ]
  },
  { path: 'library', component: LibraryComponent },
  { path: 'books/:id', component: LibraryBookComponent },
  
  { path: 'projects', component: UniversityProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },

  { path: 'programs/:id/departments', component: DepartmentsListComponent },
  { path: 'sections/:id', component: SectionComponent },
  { path: 'courses/registration', component: CourseRegistrationComponent },
  { path: 'courses/:id', component: CourseComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyRoutingModule { }
