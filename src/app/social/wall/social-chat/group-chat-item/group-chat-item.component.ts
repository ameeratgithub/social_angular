import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'group-chat-item',
  templateUrl: './group-chat-item.component.html',
  styleUrls: ['./group-chat-item.component.scss']
})
export class GroupChatItemComponent implements OnInit {

  @Input() icon:string;
  @Input() link:string;
  constructor() { }

  ngOnInit() {
  }

}
