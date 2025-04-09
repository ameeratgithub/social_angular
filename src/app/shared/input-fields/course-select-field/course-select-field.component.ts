import { Component, OnInit } from '@angular/core';
import { SemesterCourse } from 'src/app/models/study/semester-course';
import { CourseInputDialogService } from '../../dialogs/course-input-dialog/course-input-dialog.service';
import { ConfirmationDialogService } from '../../dialogs/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'course-select-field',
  templateUrl: './course-select-field.component.html',
  styleUrls: ['./course-select-field.component.scss']
})
export class CourseSelectFieldComponent implements OnInit {
  courses: SemesterCourse[] = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' },
    { id: 4, name: 'Course 4' },
    { id: 5, name: 'Course 5' },
  ];
  constructor(
    private courseInputDialog: CourseInputDialogService,
    private confirmationDialog: ConfirmationDialogService
  ) { }

  ngOnInit() {
  }
  openAddDialog() {
    const dialogRef = this.courseInputDialog.open();
    const instance = dialogRef.componentInstance;
    instance.header = "Add Course";
  }
  openEditDialog() {
    const dialogRef = this.courseInputDialog.open();
    const instance = dialogRef.componentInstance;
    instance.header = "Edit Course";
  }
  confirmDelete() {
    const dialogRef = this.confirmationDialog.open();
    const instance = dialogRef.componentInstance;
    instance.confirmationText = "Selected Course will be deleted with all its data. Are you sure about this?";
  }

}
