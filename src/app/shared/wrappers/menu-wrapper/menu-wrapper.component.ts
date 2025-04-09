import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-wrapper',
  template: `
  <button mat-icon-button [color]="color" (menuOpened)="opened.emit()" (menuClosed)="closed.emit()" 
  [matMenuTriggerFor]="matMenu">
    <mat-icon>{{icon}}</mat-icon>
  </button>
  <mat-menu #matMenu="matMenu" >
    <ng-content></ng-content>
  </mat-menu>
  `,
  styles: [
  ]
})
export class MenuWrapperComponent implements OnInit {

  @Input() icon: string;
  @Input() color: string;

  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
