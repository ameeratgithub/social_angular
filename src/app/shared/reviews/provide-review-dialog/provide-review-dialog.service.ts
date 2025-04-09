import { Injectable } from '@angular/core';
import { AppDialogService } from '../../dialogs/app-dialog/app-dialog.service';
import { ProvideReviewDialogComponent } from './provide-review-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ProvideReviewDialogService {

  constructor(
    private appDialogService: AppDialogService
  ) { }
  open() {
    return this.appDialogService.openDialog(ProvideReviewDialogComponent);
  }
}
