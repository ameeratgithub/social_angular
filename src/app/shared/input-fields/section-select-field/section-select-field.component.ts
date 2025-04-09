import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/models/study/section';
import { SectionInputDialogService } from '../../dialogs/section-input-dialog/section-input-dialog.service';
import { ConfirmationDialogService } from '../../dialogs/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'section-select-field',
  templateUrl: './section-select-field.component.html',
  styleUrls: ['./section-select-field.component.scss']
})
export class SectionSelectFieldComponent implements OnInit {
  sections: Section[] = [
    { id: 1, name: 'Section 1' },
    { id: 2, name: 'Section 2' },
    { id: 3, name: 'Section 3' },
    { id: 4, name: 'Section 4' },
    { id: 5, name: 'Section 5' },
  ];
  constructor(
    private sectionInputDialog: SectionInputDialogService,
    private confirmationDialog: ConfirmationDialogService
  ) { }

  ngOnInit() {
  }
  openAddDialog() {
    const dialogRef = this.sectionInputDialog.open();
    const instance = dialogRef.componentInstance;
    instance.header = "Add Section";
  }
  openEditDialog() {
    const dialogRef = this.sectionInputDialog.open();
    const instance = dialogRef.componentInstance;
    instance.header = "Edit Section";
  }
  confirmDelete() {
    const dialogRef = this.confirmationDialog.open();
    const instance = dialogRef.componentInstance;
    instance.confirmationText = "Selected Section will be deleted with all its data. Are you sure about this?";
  }
}
