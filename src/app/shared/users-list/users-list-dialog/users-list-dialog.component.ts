import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'users-list-dialog',
  templateUrl: './users-list-dialog.component.html',
  styleUrls: ['./users-list-dialog.component.scss']
})
export class UsersListDialogComponent {
  @Input() header: string;
  @Input() users: User[];
  @Input() loading: boolean;
}
