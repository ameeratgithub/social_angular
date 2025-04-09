import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseGroup } from 'src/app/models/study/course-group';
import { CourseGroupDialogService } from '../course-group-dialog/course-group-dialog.service';
import { UserService } from 'src/app/core/user/user.service';
import { MatSnackBar } from '@angular/material';
import { UsersListDialogService } from 'src/app/shared/users-list/users-list-dialog/users-list-dialog.service';
import { ConfirmationDialogService } from 'src/app/shared/dialogs/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'course-group-item',
  templateUrl: './course-group-item.component.html',
  styleUrls: ['./course-group-item.component.scss']
})
export class CourseGroupItemComponent implements OnInit {
  @Input() group: CourseGroup;
  @Output() removed = new EventEmitter<CourseGroup>();
  @Output() openBox = new EventEmitter();
  isRequested: boolean;
  currentUser = {
    id: 11, name: 'Ameer Hamza'
  };
  constructor(
    private groupDialogService: CourseGroupDialogService,
    private usersDialogService: UsersListDialogService,
    private userService: UserService,
    private confirmationDialogService: ConfirmationDialogService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }
  openGroupDialog() {
    this.groupDialogService.open('Add');
  }
  isLeader() {
    return this.group.members.filter(m => {
      return m.id === this.currentUser.id && m.isLeader;
    }).length > 0;
  }
  isMember() {
    return this.group.members.filter(m => {
      return m.id === this.currentUser.id;
    }).length > 0;
  }
  groupDialogAction(text: string, callback: any) {
    const dialogRef = this.confirmationDialogService.open();
    const instance = dialogRef.componentInstance;
    instance.confirmationText = text;
    instance.confirmed.subscribe(() => {
      dialogRef.close();
      callback();
    });
  }
  remove(group: CourseGroup) {
    this.groupDialogAction('Do you really want to delete group?', () => this.removed.emit(group));
  }
  leave() {
    this.groupDialogAction('Do you really want to leave group?', () => this.currentUser.id = 15);
  }
  requestJoin() {
    this.snackBar.open('Request has been sent', null, { duration: 2000 }).afterDismissed().subscribe(() => {
      this.isRequested = true;
    });
  }
  cancelRequest() {
    this.snackBar.open('Request has been canceled', null, { duration: 2000 }).afterDismissed().subscribe(() => {
      this.isRequested = false;
    });
  }
  openMembersDialog() {
    const dialogRef = this.usersDialogService.open();
    const instance = dialogRef.componentInstance;
    instance.header = 'Group members';
    instance.loading = true;
    this.userService.getAll().subscribe(res => {
      instance.users = res;
      instance.loading = false;
    });
  }
  openChatBox(groupId: number) {
    this.openBox.emit(groupId);
  }

}
