import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppDialogService {


  constructor(public dialog: MatDialog, private router: Router) {
  }

  openDialog(component: any, config?: MatDialogConfig): MatDialogRef<any> {

    config = config || new MatDialogConfig();
    config.width = config.width || '450px';
    config.height = config.height || 'auto';
    config.position = config.position || { top: '5%' };
    config.autoFocus = false;
    config.closeOnNavigation = true;
    const dialogRef = this.dialog.open(component, config);
    this.router.events.subscribe(() => dialogRef.close());
    return dialogRef;
  }
}
