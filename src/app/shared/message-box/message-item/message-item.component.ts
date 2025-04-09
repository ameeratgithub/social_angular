import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input() self;
  @Input() start;
  @Input() end;
  constructor() { }

  ngOnInit() {
  }

}
