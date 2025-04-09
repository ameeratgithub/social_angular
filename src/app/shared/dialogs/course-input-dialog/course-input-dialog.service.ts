import { Injectable } from '@angular/core';
import { AppDialogService } from '../app-dialog/app-dialog.service';
import { CourseInputDialogComponent } from './course-input-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CourseInputDialogService {

  constructor(private appDialogServince: AppDialogService) { }
  open() {
    return this.appDialogServince.openDialog(CourseInputDialogComponent, { position: { top: '10%' } });
  }
}
