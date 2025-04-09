import { Component, OnInit, Input } from '@angular/core';

import { PostService } from '../services/post/post.service';
import { Post } from 'src/app/models/social/post';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  comments: Comment[] = [];
  @Input() post: Post;
  showCommentArea = false;
  constructor(
    private postService: PostService
  ) { }
  ngOnInit() {
    this.showCommentInput();
  }
  private getComments() {
    this.postService.getComments(this.post.id).subscribe(comments => {
      this.comments = comments;
    });
  }
  showComments(showCommentArea: boolean) {
    this.showCommentArea = showCommentArea;
    this.getComments();
  }
  showCommentInput() {
    this.showComments(true);
  }
}
