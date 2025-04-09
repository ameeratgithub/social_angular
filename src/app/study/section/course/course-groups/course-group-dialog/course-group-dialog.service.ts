import { Injectable } from '@angular/core';

import { CourseGroupDialogComponent } from './course-group-dialog.component';
import { AppDialogService } from 'src/app/shared/dialogs/app-dialog/app-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class CourseGroupDialogService {

  constructor(private dialogService: AppDialogService) { }
  open(action: string) {
    const dialogRef = this.dialogService.openDialog(CourseGroupDialogComponent);
    dialogRef.componentInstance.action = action;
    return dialogRef;
  }
}
