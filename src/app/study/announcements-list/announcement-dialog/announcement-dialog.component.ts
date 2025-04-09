import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'announcement-dialog',
  templateUrl: './announcement-dialog.component.html',
  styleUrls: ['./announcement-dialog.component.scss']
})
export class AnnouncementDialogComponent implements OnInit {

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
