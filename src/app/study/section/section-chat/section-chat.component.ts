import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-chat',
  templateUrl: './section-chat.component.html',
  styleUrls: ['./section-chat.component.scss']
})
export class SectionChatComponent implements OnInit {

  cardContentHeight = 0;
  cardWidth = '100px';
  flexLayoutAlign = 'center';
  cardHeaderIcon = 'keyboard_arrow_up';
  constructor() { }
  ngOnInit() {

  }
  toggleBox() {
    this.cardContentHeight = this.expanded() ? 0 : 500;
    this.flexLayoutAlign = this.expanded() ? 'space-between ' : 'center';
    this.cardHeaderIcon = this.expanded() ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
    this.cardWidth = this.expanded() ? '400px' : '100px';
  }
  expanded = () => this.cardContentHeight > 0;
}
