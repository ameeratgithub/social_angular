import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-setting-switch',
  templateUrl: './user-setting-switch.component.html',
  styleUrls: ['./user-setting-switch.component.scss']
})
export class UserSettingSwitchComponent implements OnInit {

  @Input() key;
  constructor() { }

  ngOnInit() {
  }

}
