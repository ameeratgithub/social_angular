import { Component, OnInit } from '@angular/core';
import { AppDialogService } from 'src/app/shared/dialogs/app-dialog/app-dialog.service';
import { UsersListDialogComponent } from 'src/app/shared/users-list/users-list-dialog/users-list-dialog.component';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/models/user/user';
import { ComponentLoaderService } from 'src/app/shared/component-loader/component-loader.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'user-suggestions',
  templateUrl: './user-suggestions.component.html',
  styleUrls: ['./user-suggestions.component.scss']
})
export class UserSuggestionsComponent implements OnInit {

  suggestedUsers: User[];
  constructor(
    private dialogService: AppDialogService,
    public loaderService: ComponentLoaderService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loaderService.loader(
      this.userService.getAll().pipe(map(x => x.slice(0, 3))),
      (users) => {
        this.suggestedUsers = users;
      }
    );
  }
  openUsersDialog() {
    const dialogRef = this.dialogService.openDialog(UsersListDialogComponent, { position: { top: '5%' } });
    const instance = dialogRef.componentInstance;
    instance.loading = true;
    instance.header = 'Suggested users';
    this.loaderService.loader(this.userService.getAll(), res => {
      instance.loading = false;
      instance.users = res;
    });
  }
}
