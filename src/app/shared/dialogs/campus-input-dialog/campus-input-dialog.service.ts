import { Injectable } from '@angular/core';
import { AppDialogService } from '../app-dialog/app-dialog.service';
import { CampusInputDialogComponent } from './campus-input-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CampusInputDialogService {

  constructor(private appDialogServince: AppDialogService) { }
  open() {
    return this.appDialogServince.openDialog(CampusInputDialogComponent, { position: { top: '10%' } });
  }
}
