import { Injectable } from '@angular/core';
import { AnnouncementDialogComponent } from './announcement-dialog.component';
import { AppDialogService } from 'src/app/shared/dialogs/app-dialog/app-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementDialogService {

  constructor(
    private dialogService: AppDialogService
  ) { }
  open() {
    const dialogRef = this.dialogService.openDialog(AnnouncementDialogComponent,
      {
        position: { top: '10%' },
        data: {
          announcement: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam totam ducimus ipsum nequ',
          date: Date.now(),
          announcer: { id: 1, name: 'Ameer Hamza' }
        }
      }
    );
    dialogRef.componentInstance.save.subscribe(res => {
      console.log(res);
      dialogRef.close();
    });
  }
}
