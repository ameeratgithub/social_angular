import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'social-chat',
  templateUrl: './social-chat.component.html',
  styleUrls: ['./social-chat.component.scss']
})
export class SocialChatComponent implements OnInit {

  currentPanel: MatExpansionPanel;
  messageBoxOpened = false;
  constructor() { }

  ngOnInit() {
  }

  handlePanel(panel: MatExpansionPanel) {
    this.currentPanel = panel;
    console.log(this.currentPanel);
  }
}
