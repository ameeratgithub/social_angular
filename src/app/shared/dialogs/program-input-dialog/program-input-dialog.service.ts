import { Injectable } from '@angular/core';
import { AppDialogService } from '../app-dialog/app-dialog.service';
import { ProgramInputDialogComponent } from './program-input-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ProgramInputDialogService {

  constructor(private appDialogServince: AppDialogService) { }
  open() {
    return this.appDialogServince.openDialog(ProgramInputDialogComponent, { position: { top: '10%' } });
  }
}
