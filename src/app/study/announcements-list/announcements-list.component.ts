import { Component, OnInit, Input } from '@angular/core';

import { AnnouncementAddDialogComponent } from './announcement-add-dialog/announcement-add-dialog.component';
import { Announcement } from '../../models/study/announcement';
import { AppDialogService } from 'src/app/shared/dialogs/app-dialog/app-dialog.service';
import { AnnouncementDialogService } from './announcement-dialog/announcement-dialog.service';

@Component({
  selector: 'announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.scss']
})
export class AnnouncementsListComponent implements OnInit {

  @Input() announcements: Announcement[];
  @Input() loading: boolean;
  constructor(
    private announcementDialog: AnnouncementDialogService
  ) { }

  ngOnInit() {
  }
  openAnnouncementDialog() {
    this.announcementDialog.open();
  }

}
