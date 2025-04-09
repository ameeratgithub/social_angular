import { Component, OnInit } from '@angular/core';
import { Campus } from 'src/app/models/study/campus';
import { CampusInputDialogService } from '../../dialogs/campus-input-dialog/campus-input-dialog.service';
import { ConfirmationDialogService } from '../../dialogs/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'campus-select-field',
  templateUrl: './campus-select-field.component.html',
  styleUrls: ['./campus-select-field.component.scss']
})
export class CampusSelectFieldComponent implements OnInit {

  campuses: Campus[] = [
    { id: 1, name: 'Campus 1' },
    { id: 1, name: 'Campus 2' },
    { id: 1, name: 'Campus 3' },
    { id: 1, name: 'Campus 4' },
    { id: 1, name: 'Campus 5' },
  ];
  constructor(
    private campusInputDialog: CampusInputDialogService,
    private confirmationDialog: ConfirmationDialogService
  ) { }

  ngOnInit() {
  }
  openAddDialog() {
    const dialogRef = this.campusInputDialog.open();
    const instance = dialogRef.componentInstance;
    instance.header = "Add Campus";
  }
  openEditDialog() {
    const dialogRef = this.campusInputDialog.open();
    const instance = dialogRef.componentInstance;
    instance.header = "Edit Campus";
  }
  confirmDelete() {
    const dialogRef = this.confirmationDialog.open();
    const instance = dialogRef.componentInstance;
    instance.confirmationText = "Selected Campus will be deleted with all its data. Are you sure about this?";
  }

}
