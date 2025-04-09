import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss']
})
export class UserSettingComponent implements OnInit {

  active = '';
  actions = [
    { name: 'pp', text: 'Profile Picture', active: true },
    { name: 'gi', text: 'General Info', active: false },
    { name: 'cp', text: 'Password', active: false },
    { name: 'p', text: 'Privacy', active: false },
    { name: 'n', text: 'Notifications', active: false },
    { name: 'so', text: 'Social', active: false },
    { name: 'b', text: 'Blog', active: false },
    { name: 'st', text: 'Study', active: false },
  ];
  constructor() {
    this.active = this.actions.filter(a => a.active === true)[0].name;
  }

  ngOnInit() {
  }
  changeAction(action) {
    this.actions.forEach(a => {
      a.active = false;
    });
    action.active = true;
    this.active = action.name;
  }

}
