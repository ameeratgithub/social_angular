import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/study/department';
import { DepartmentInputDialogService } from '../../dialogs/department-input-dialog/department-input-dialog.service';
import { ConfirmationDialogService } from '../../dialogs/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'department-select-field',
  templateUrl: './department-select-field.component.html',
  styleUrls: ['./department-select-field.component.scss']
})
export class DepartmentSelectFieldComponent implements OnInit {

  departments: Department[] = [
    { id: 1, name: 'Department 1' },
    { id: 2, name: 'Department 2' },
    { id: 3, name: 'Department 3' },
    { id: 4, name: 'Department 4' },
    { id: 5, name: 'Department 5' },
  ];
  constructor(
    private departmentInputDialog: DepartmentInputDialogService,
    private confirmationDialog: ConfirmationDialogService
  ) { }

  ngOnInit() {
  }
  openAddDialog() {
    const dialogRef = this.departmentInputDialog.open();
    const instance = dialogRef.componentInstance;
    instance.header = "Add Department";
  }
  openEditDialog() {
    const dialogRef = this.departmentInputDialog.open();
    const instance = dialogRef.componentInstance;
    instance.header = "Edit Department";
  }
  confirmDelete() {
    const dialogRef = this.confirmationDialog.open();
    const instance = dialogRef.componentInstance;
    instance.confirmationText = "Selected Department will be deleted with all its data. Are you sure about this?";
  }

}
