import { Component, OnInit } from '@angular/core';
import { OriginConnectionPosition, OverlayConnectionPosition, ConnectionPositionPair } from '@angular/cdk/overlay';

@Component({
  selector: 'message-box-action',
  templateUrl: './message-box-action.component.html',
  styleUrls: ['./message-box-action.component.scss']
})
export class MessageBoxActionComponent implements OnInit {

  private originPos: OriginConnectionPosition = {
    originX: 'end',
    originY: 'top'
  };
  private overlayPos: OverlayConnectionPosition = {
    overlayX: 'end',
    overlayY: 'bottom'
  };
  popoverPosition = new ConnectionPositionPair(this.originPos, this.overlayPos, 25, -12);
  constructor() { }

  ngOnInit() {
  }
  sendMessage(message: string) {
    console.log(message);
  }

}
