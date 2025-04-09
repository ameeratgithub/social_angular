import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'users-selection-list',
  templateUrl: './users-selection-list.component.html',
  styleUrls: ['./users-selection-list.component.scss']
})
export class UsersSelectionListComponent implements OnInit {

  @Input() users: User[];
  constructor() { }

  ngOnInit() {
  }

}
