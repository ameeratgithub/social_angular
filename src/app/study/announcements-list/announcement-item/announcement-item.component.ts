import { Component, OnInit, Input } from '@angular/core';

import { AnnouncementAddDialogComponent } from '../announcement-add-dialog/announcement-add-dialog.component';
import { Announcement } from '../../../models/study/announcement';
import { Time } from '@angular/common';

import { AppDialogService } from 'src/app/shared/dialogs/app-dialog/app-dialog.service';
import { AnnouncementDialogService } from '../announcement-dialog/announcement-dialog.service';
import { ConfirmationDialogService } from 'src/app/shared/dialogs/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'announcement-item',
  templateUrl: './announcement-item.component.html',
  styleUrls: ['./announcement-item.component.scss']
})
export class AnnouncementItemComponent implements OnInit {

  @Input() announcement: Announcement;
  constructor(
    private announcementDialog: AnnouncementDialogService,
    private confirmationDialog: ConfirmationDialogService
  ) { }
  isAnnouncer: boolean = true;
  ngOnInit() {
  }
  openAnnouncementDialog() {
    this.announcementDialog.open();
  }
  openConfirmationDialog(){
    this.confirmationDialog.open();
  }

}
