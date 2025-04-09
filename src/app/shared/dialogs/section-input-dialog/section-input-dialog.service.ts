import { Injectable } from '@angular/core';
import { AppDialogService } from '../app-dialog/app-dialog.service';
import { SectionInputDialogComponent } from './section-input-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class SectionInputDialogService {

  constructor(private appDialogServince: AppDialogService) { }
  open() {
    return this.appDialogServince.openDialog(SectionInputDialogComponent, { position: { top: '10%' } });
  }
}
