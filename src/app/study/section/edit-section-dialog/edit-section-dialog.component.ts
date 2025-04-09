import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import { SectionService } from '../../services/section/section.service';
import { Section } from '../../../models/study/section';
import { ConfirmationDialogService } from 'src/app/shared/dialogs/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'edit-section-dialog',
  templateUrl: './edit-section-dialog.component.html',
  styleUrls: ['./edit-section-dialog.component.scss']
})
export class EditSectionDialogComponent implements OnInit {

  loading = false;
  newCrControl = new FormControl();
  newGrControl = new FormControl();
  newMemberControl = new FormControl();
  filteredMembers: Observable<any[]>;
  @ViewChild('newMemberAuto') newMemberAuto: MatAutocomplete;
  @ViewChild('newStudentInput') newStudentInput: ElementRef<HTMLInputElement>;

  sectionInfo: Section;
  studentsToAdd = [];
  currentUser = {
    role: 'GR'
  };
  separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor(
    private sectionService: SectionService, 
    // private confirmationDialogService: ConfirmationDialogService
  ) {
  }
  addMemberChip(event: MatChipInputEvent): void {
    if (!this.newMemberAuto.isOpen) {
      const input = event.input;
      const value = event.value;
      if ((value || '').trim()) {
        this.studentsToAdd.push(value);
      }
      if (input) {
        input.value = '';
      }
      this.newMemberControl.setValue(null);
    }
  }
  newStudentSelected(event: MatAutocompleteSelectedEvent): void {
    this.studentsToAdd.push(event.option.value);
    this.newStudentInput.nativeElement.value = '';
    this.newMemberControl.setValue('');
  }
  removeMemberChip(m: any) {
    const index = this.studentsToAdd.indexOf(m);
    if (index >= 0) {
      this.studentsToAdd.splice(index, 1);
    }
  }
  private filterMembers(value: string) {
    const filterValue = value.toLowerCase();
    return this.sectionInfo.members.filter(m => m.fullName.toLowerCase().indexOf(filterValue) > -1);
  }
  initializeControls() {
    if (this.currentUser.role === 'GR') {
      this.newCrControl.disable();
    }
    this.filteredMembers = this.newCrControl.valueChanges.pipe(
      startWith(''),
      map((m: string | null) => m ? this.filterMembers(m) : this.sectionInfo.members.slice())
    );
  }

  // openConfirmationDialog() {
  //   const dialogRef = this.confirmationDialogService.open({ width: '500px' });
  //   dialogRef.componentInstance.confirmationText = 'Do you really want to move to next semester?' +
  //     ' Do it if your semester has been changed.';
  // }

  ngOnInit() {
    this.loading = true;
    this.sectionService.getSectionEditInfo().subscribe(res => {
      this.loading = false;
      this.sectionInfo = res;
      this.initializeControls();
    });
  }
}
