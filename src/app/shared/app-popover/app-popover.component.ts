import { Component, OnInit, Input } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
@Component({
  selector: 'app-popover',
  templateUrl: './app-popover.component.html',
  styleUrls: ['./app-popover.component.scss']
})
export class AppPopoverComponent implements OnInit {

  @Input() icon: string;
  @Input() buttonColor: string;
  @Input() arrow: string;
  @Input() close = 'backdrop';
  isOpen = false;

  @Input() private position: ConnectionPositionPair;
  positions: ConnectionPositionPair[];
  constructor() { }
  ngOnInit() {
    this.positions = [this.position];
  }

}
