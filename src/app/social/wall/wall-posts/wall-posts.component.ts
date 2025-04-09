import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared_modules/posts/services/post/post.service';
import { Post } from 'src/app/models/social/post';

@Component({
  selector: 'wall-posts',
  templateUrl: './wall-posts.component.html',
  styleUrls: ['./wall-posts.component.scss']
})
export class WallPostsComponent implements OnInit {

  posts: Post[];
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

}
