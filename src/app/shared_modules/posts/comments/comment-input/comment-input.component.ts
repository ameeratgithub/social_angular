import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OriginConnectionPosition, OverlayConnectionPosition, ConnectionPositionPair } from '@angular/cdk/overlay';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.scss']
})
export class CommentInputComponent implements OnInit, OnChanges {

  @Input() taggedPerson: User;
  tag: any;
  private originPos: OriginConnectionPosition = {
    originX: 'end',
    originY: 'top'
  };
  private overlayPos: OverlayConnectionPosition = {
    overlayX: 'end',
    overlayY: 'bottom'
  };
  popoverPosition = new ConnectionPositionPair(this.originPos, this.overlayPos, 18, -12);
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.convertToTag();
  }
  convertToTag() {
    if (!this.taggedPerson) return;
    this.tag = {
      html: `
      <a class='mat-link tagged' href="javascript:void(0)" data-id='${this.taggedPerson.id}'>
        ${this.taggedPerson.fullName}
      </a>`
    };
  }
  saveComment(comment) {
    console.log(comment);
  }
}
