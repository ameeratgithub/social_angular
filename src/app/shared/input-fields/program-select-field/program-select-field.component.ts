import { Component, OnInit } from '@angular/core';
import { Program } from 'src/app/models/study/program';
import { ProgramInputDialogService } from '../../dialogs/program-input-dialog/program-input-dialog.service';
import { ConfirmationDialogService } from '../../dialogs/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'program-select-field',
  templateUrl: './program-select-field.component.html',
  styleUrls: ['./program-select-field.component.scss']
})
export class ProgramSelectFieldComponent implements OnInit {

  programs: Program[] = [
    { id: 1, name: 'Program 1' },
    { id: 2, name: 'Program 2' },
    { id: 3, name: 'Program 3' },
    { id: 4, name: 'Program 4' },
    { id: 5, name: 'Program 5' },
  ];
  constructor(
    private programInputDialog: ProgramInputDialogService,
    private confirmationDialog: ConfirmationDialogService
  ) { }

  ngOnInit() {
  }
  openAddDialog() {
    const dialogRef = this.programInputDialog.open();
    const instance = dialogRef.componentInstance;
    instance.header = "Add Program";
  }
  openEditDialog() {
    const dialogRef = this.programInputDialog.open();
    const instance = dialogRef.componentInstance;
    instance.header = "Edit Program";
  }
  confirmDelete() {
    const dialogRef = this.confirmationDialog.open();
    const instance = dialogRef.componentInstance;
    instance.confirmationText = "Selected Program will be deleted with all its data. Are you sure about this?";
  }

}
