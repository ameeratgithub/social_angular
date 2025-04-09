import { Injectable } from '@angular/core';
import { OriginConnectionPosition, OverlayConnectionPosition, ConnectionPositionPair } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class AppPopoverService {

  constructor() { }
  getTopRightPosition(x?: number, y?: number) {
    const originPos: OriginConnectionPosition = {
      originX: 'start',
      originY: 'bottom'
    };
    const overlayPos: OverlayConnectionPosition = {
      overlayX: 'end',
      overlayY: 'top'
    };
    return new ConnectionPositionPair(originPos, overlayPos, x | 40, y | 15);
  }
}
