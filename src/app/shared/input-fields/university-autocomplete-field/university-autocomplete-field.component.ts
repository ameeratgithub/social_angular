import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { University } from 'src/app/models/study/university';
import { startWith, map } from 'rxjs/operators';
import { UniversityService } from 'src/app/shared_modules/universities-list/services/university/university.service';
import { UniversityInputDialogService } from '../../dialogs/university-input-dialog/university-input-dialog.service';
import { ConfirmationDialogService } from '../../dialogs/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'university-autocomplete-field',
  templateUrl: './university-autocomplete-field.component.html',
  styleUrls: ['./university-autocomplete-field.component.scss']
})
export class UniversityAutocompleteFieldComponent implements OnInit {
  uniControl = new FormControl();
  filteredUniversities: Observable<University[]>;
  allUniversities: University[];
  constructor(
    private universityService: UniversityService,
    private universityInputDialog: UniversityInputDialogService,
    private confirmationDialog: ConfirmationDialogService
  ) { }

  ngOnInit() {
    this.universityService.getAll().subscribe(res => {
      this.allUniversities = res;
      this.initializeControl();
    });
  }
  initializeControl() {
    this.filteredUniversities = this.uniControl.valueChanges.pipe(
      startWith(''),
      map((m: string | null) => m ? this.filterUniversities(m) : this.allUniversities.slice())
    );
  }
  private filterUniversities(value: string) {
    const filterValue = value.toLowerCase();
    return this.allUniversities.filter(u => u.name.toLowerCase().indexOf(filterValue) > -1);
  }
  openAddDialog() {
    const dialogRef = this.universityInputDialog.open();
    const instance = dialogRef.componentInstance;
    instance.header = "Add University";
  }
  openEditDialog() {
    const dialogRef = this.universityInputDialog.open();
    const instance = dialogRef.componentInstance;
    instance.header = "Edit University";
  }
  confirmDelete() {
    const dialogRef = this.confirmationDialog.open();
    const instance = dialogRef.componentInstance;
    instance.confirmationText = "Selected University will be deleted with all its data. Are you sure about this?";
  }
}
