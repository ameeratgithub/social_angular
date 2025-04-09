import { Injectable } from '@angular/core';
import { AppDialogService } from '../app-dialog/app-dialog.service';
import { UniversityInputDialogComponent } from './university-input-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UniversityInputDialogService {

  constructor(private appDialogServince: AppDialogService) { }
  open() {
    return this.appDialogServince.openDialog(UniversityInputDialogComponent, { position: { top: '10%' } });
  }
}
