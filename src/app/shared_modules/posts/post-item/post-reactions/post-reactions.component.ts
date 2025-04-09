import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from 'src/app/models/social/post';

@Component({
  selector: 'post-reactions',
  templateUrl: './post-reactions.component.html',
  styleUrls: ['./post-reactions.component.scss']
})
export class PostReactionsComponent implements OnInit {

  @Output() likesClick: EventEmitter<any>;
  @Output() commentsClick: EventEmitter<any>;
  @Output() sharesClick: EventEmitter<any>;
  @Input() post: Post;
  constructor() {
    this.likesClick = new EventEmitter();
    this.commentsClick = new EventEmitter();
    this.sharesClick = new EventEmitter();
  }

  ngOnInit() {
  }

  likesClicked() {

  }
  commentsClicked() {
    this.commentsClick.emit();
  }
  sharesClicked() {

  }

}
