import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectItemComponent } from './projects-list/project-item/project-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProjectsListComponent, ProjectItemComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [ProjectsListComponent, ProjectItemComponent ]
})
export class ProjectsListModule { }
