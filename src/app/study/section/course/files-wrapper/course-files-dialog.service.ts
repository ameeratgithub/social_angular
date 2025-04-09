import { Injectable } from '@angular/core';

import { CourseFilesDialogComponent } from './course-files-dialog/course-files-dialog.component';
import { CourseFile } from 'src/app/models/study/course-file';
import { AppDialogService } from 'src/app/shared/dialogs/app-dialog/app-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class CourseFilesDialogService {

  constructor(
    private dialogService: AppDialogService
  ) { }
  openDialog(fileType: string, action: string, file?: CourseFile) {
    const dialogRef = this.dialogService.openDialog(CourseFilesDialogComponent);
    dialogRef.componentInstance.fileType = fileType;
    dialogRef.componentInstance.action = action;
    dialogRef.componentInstance.file = file;
    return dialogRef;
  }
}
