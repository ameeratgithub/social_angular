import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/social/post';
import { PostService } from 'src/app/shared_modules/posts/services/post/post.service';

@Component({
  selector: 'profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.scss']
})
export class ProfilePostsComponent implements OnInit {

  posts: Post[];
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

}
