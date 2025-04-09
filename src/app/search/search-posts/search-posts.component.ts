import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/social/post';
import { PostService } from 'src/app/shared_modules/posts/services/post/post.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.scss']
})
export class SearchPostsComponent implements OnInit {

  posts: Post[];
  constructor(
    private postService: PostService
  ) { }
  ngOnInit() {
    this.postService.getPosts()
      .pipe(map(x => x.slice(0, 4)))
      .subscribe(posts => this.posts = posts);
  }

}
