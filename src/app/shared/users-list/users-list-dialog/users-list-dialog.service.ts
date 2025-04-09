import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material';
import { UsersListDialogComponent } from './users-list-dialog.component';
import { AppDialogService } from '../../dialogs/app-dialog/app-dialog.service';


@Injectable({
  providedIn: 'root'
})
export class UsersListDialogService {

  constructor(
    private appDialogService: AppDialogService
  ) { }
  open(config?: MatDialogConfig) {
    return this.appDialogService.openDialog(UsersListDialogComponent, config);
  }
}
