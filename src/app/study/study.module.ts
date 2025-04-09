import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeWrapperComponent } from './tree-wrapper/tree-wrapper.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { CampusesListComponent } from './campuses-list/campuses-list.component';
import { DtWrapperComponent } from './section/dt-wrapper/dt-wrapper.component';
import { SectionComponent } from './section/section.component';
import { CourseComponent } from './section/course/course.component';
import { FilesWrapperComponent } from './section/course/files-wrapper/files-wrapper.component';
import { CourseFileComponent } from './section/course/files-wrapper/course-file.component';
import { SectionChatComponent } from './section/section-chat/section-chat.component';
import { CourseGroupsComponent } from './section/course/course-groups/course-groups.component';

import { LibraryComponent } from './library/library.component';
import { LibraryBookComponent } from './library/library-book/library-book.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SharedModule } from '../shared/shared.module';
import { AnnouncementsListComponent } from './announcements-list/announcements-list.component';
import { AnnouncementItemComponent } from './announcements-list/announcement-item/announcement-item.component';

import { CampusService } from './services/campus/campus.service';
import { EditSectionDialogComponent } from './section/edit-section-dialog/edit-section-dialog.component';
import { CourseFilesDialogComponent } from './section/course/files-wrapper/course-files-dialog/course-files-dialog.component';
import { CourseFilesDialogService } from './section/course/files-wrapper/course-files-dialog.service';
import { CourseGroupItemComponent } from './section/course/course-groups/course-group-item/course-group-item.component';
import { CourseFileService } from './services/course-file/course-file.service';
import { CourseGroupDialogComponent } from './section/course/course-groups/course-group-dialog/course-group-dialog.component';
import { DepartmentService } from './services/department/department.service';
import { SectionService } from './services/section/section.service';
import { SemesterCourseService } from './services/semester-course/semester-course.service';
import { LibraryService } from './services/library/library.service';
import { LibraryDialogComponent } from './library/library-dialog/library-dialog.component';
import { LibraryDialogService } from './library/library-dialog/library-dialog.service';
import { BookService } from './services/library/book.service';
import { StudentService } from './services/student/student.service';
import { ProjectService } from './services/project/project.service';
import { CourseRegistrationComponent } from './teacher/course-registration/course-registration.component';
import { CourseRegistrationFieldsComponent } from './teacher/course-registration-fields/course-registration-fields.component';
import { ActiveRegisteredClassesComponent } from './teacher/course-registration/active-registered-classes/active-registered-classes.component';
import { StudyRoutingModule } from './study-routing.module';
import { UniversityProjectsComponent } from './university-projects/university-projects.component';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { UniversitiesListModule } from '../shared_modules/universities-list/universities-list.module';
import { BooksListModule } from '../shared_modules/books-list/books-list.module';
import { ProjectsListModule } from '../shared_modules/projects-list/projects-list.module';
import { CourseGroupDialogService } from './section/course/course-groups/course-group-dialog/course-group-dialog.service';
import { ProjectDialogService } from './project-dialog/project-dialog.service';
import { AnnouncementDialogComponent } from './announcements-list/announcement-dialog/announcement-dialog.component';
import { AnnouncementDialogService } from './announcements-list/announcement-dialog/announcement-dialog.service';
import { TreeComponent } from './tree-wrapper/tree/tree.component';
import { TreeService } from './tree-wrapper/tree/tree.service';
import { AnnouncementAddDialogComponent } from './announcements-list/announcement-add-dialog/announcement-add-dialog.component';

@NgModule({
  declarations: [
    TreeWrapperComponent, TreeComponent,DepartmentsListComponent, CampusesListComponent, DtWrapperComponent,
    SectionComponent, CourseComponent, FilesWrapperComponent, CourseFileComponent,
    SectionChatComponent,
    CourseGroupsComponent, 
    LibraryComponent,  LibraryBookComponent,
    ProjectDetailsComponent,
    AnnouncementsListComponent,
    AnnouncementItemComponent,
    EditSectionDialogComponent,
    CourseFilesDialogComponent,
    CourseGroupItemComponent,
    CourseGroupDialogComponent,
    LibraryDialogComponent,
    ProjectDialogComponent,
    CourseRegistrationComponent,
    CourseRegistrationFieldsComponent,
    ActiveRegisteredClassesComponent,
    UniversityProjectsComponent,
    AnnouncementDialogComponent,
    AnnouncementAddDialogComponent
  ],
  imports: [
    CommonModule, SharedModule, StudyRoutingModule, UniversitiesListModule, BooksListModule, ProjectsListModule
  ],
  providers: [
    CampusService, CourseFilesDialogService, CourseFileService, DepartmentService, SectionService,
    SemesterCourseService, LibraryService, LibraryDialogService, BookService, StudentService, ProjectService,
    CourseGroupDialogService, ProjectDialogService, AnnouncementDialogService, TreeService
  ],
  entryComponents: [ 
   AnnouncementDialogComponent, EditSectionDialogComponent, CourseFilesDialogComponent,
   LibraryDialogComponent, ProjectDialogComponent, CourseGroupDialogComponent
  ]
})
export class StudyModule { }
