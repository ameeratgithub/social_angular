import { Injectable } from '@angular/core';
import { DepartmentInputDialogComponent } from './department-input-dialog.component';
import { AppDialogService } from '../app-dialog/app-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentInputDialogService {

  constructor(private appDialogServince: AppDialogService) { }
  open() {
    return this.appDialogServince.openDialog(DepartmentInputDialogComponent, { position: { top: '10%' } });
  }
}
