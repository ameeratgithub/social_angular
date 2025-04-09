import { Injectable } from '@angular/core';
import { AppDialogService } from 'src/app/shared/dialogs/app-dialog/app-dialog.service';
import { ProjectDialogComponent } from './project-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectDialogService {

  constructor(
    private appDialogService: AppDialogService
  ) { }
  open() {
    return this.appDialogService.openDialog(ProjectDialogComponent);
  }
}
