import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/models/social/comment';

@Component({
  selector: 'comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {

  replyInputVisible = false;
  showReplies = true;
  personToTag: any;
  @Input() comment: Comment;
  @Output() tagInReply = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  isLeaf(): boolean {
    return !this.comment.comments || this.comment.comments.length === 0;
  }
  toggleReplyInput() {
    if (!this.isLeaf()) {
      this.replyInputVisible = !this.replyInputVisible
    }
    else {
      this.tagInReply.emit(this.comment.text);
    }
  }
  mentionInReply(comment) {
    this.replyInputVisible = true;
    this.personToTag = { id: '1', fullName: 'Ameer Hamza' };
  }

}
