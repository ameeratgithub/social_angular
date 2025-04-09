import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.scss']
})
export class ChatSectionComponent implements OnInit {

  @Output() itemClick: EventEmitter<any>;
  @Input() header;
  @Output() panelOpened: EventEmitter<any>;
  constructor() {
    this.itemClick = new EventEmitter<any>();
    this.panelOpened = new EventEmitter<any>();
  }

  ngOnInit() {
  }
}
