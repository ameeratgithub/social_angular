import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'details-item',
  template: `
  <div  fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="10px">
    <span class="key" fxFlex="110px">{{key}} : </span>
    <span *ngIf="!link && value">{{value}}</span>
    <a class="mat-link" *ngIf="link" [routerLink]="link">{{value}}</a>
    <ng-content *ngIf="!value"></ng-content>
  </div>
  `,
  styles: [
    `.key{
      font-weight:500
    }`
  ]
})
export class DetailsItemComponent implements OnInit {

  @Input() key: string;
  @Input() value: string;
  @Input() link: string;
  constructor() { }

  ngOnInit() {
  }

}
