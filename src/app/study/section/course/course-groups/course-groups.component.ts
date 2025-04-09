import { Component, OnInit } from '@angular/core';
import { CourseGroup } from 'src/app/models/study/course-group';
import { CourseGroupService } from 'src/app/study/services/course-group/course-group.service';
import { CourseGroupDialogService } from './course-group-dialog/course-group-dialog.service';
import { CourseFilesDialogService } from '../files-wrapper/course-files-dialog.service';

@Component({
  selector: 'course-groups',
  templateUrl: './course-groups.component.html',
  styleUrls: ['./course-groups.component.scss']
})
export class CourseGroupsComponent implements OnInit {

  messageBoxOpened = false;
  groups: CourseGroup[];
  constructor(
    private courseGroupService: CourseGroupService,
    private groupDialogService: CourseGroupDialogService,
    private courseFilesDialog: CourseFilesDialogService
  ) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.courseGroupService.getAll().subscribe(res => this.groups = res);
  }
  openGroupDialog() {
    this.groupDialogService.open('Add');
    // this.courseFilesDialog.openDialog('lecture', 'add');
  }
  remove(group: CourseGroup) {
    this.groups = this.groups.filter(g => g.id !== group.id);
  }

}
