import { Injectable } from '@angular/core';
import { AppDialogService } from '../app-dialog/app-dialog.service';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { MatDialogConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private appDialogService: AppDialogService) { }
  open(config?: MatDialogConfig) {
    return this.appDialogService.openDialog(ConfirmationDialogComponent, { position: { top: '10%' } });
  }
}
