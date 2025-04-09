import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'announcement-add-dialog',
  templateUrl: './announcement-add-dialog.component.html',
  styleUrls: ['./announcement-add-dialog.component.scss']
})
export class AnnouncementAddDialogComponent implements OnInit {
  announcementCtrl: FormControl;
  @Output() save: EventEmitter<any>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.save = new EventEmitter();
    this.announcementCtrl = new FormControl();
    if (data) {
      this.announcementCtrl.setValue(data.announcement);
    } else {
      this.data = {
      };
    }
  }

  ngOnInit() {
  }
  saved() {
    this.data.announcement = this.announcementCtrl.value;
    this.save.emit(this.data);
  }
  
}
