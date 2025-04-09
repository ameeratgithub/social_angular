import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'message-box-header',
  templateUrl: './message-box-header.component.html',
  styleUrls: ['./message-box-header.component.scss']
})
export class MessageBoxHeaderComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


}
