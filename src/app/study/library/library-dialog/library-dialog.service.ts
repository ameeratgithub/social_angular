import { Injectable } from '@angular/core';

import { MatDialogConfig, MatDialogRef } from '@angular/material';
import { LibraryDialogComponent } from './library-dialog.component';
import { AppDialogService } from 'src/app/shared/dialogs/app-dialog/app-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryDialogService {

  constructor(
    private dialogService: AppDialogService
  ) { }
  open(config?: MatDialogConfig): MatDialogRef<LibraryDialogComponent> {
    return this.dialogService.openDialog(LibraryDialogComponent);
  }
  save(event){

  }
}
