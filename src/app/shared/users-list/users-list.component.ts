import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() header: string;
  @Input() underline: boolean;
  @Input() users: User[];
  constructor() { }

  ngOnInit() {
  }

}
