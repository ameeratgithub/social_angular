import { Component, OnInit } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { SearchOptions } from 'src/app/shared/component-search/component-search.component';
import { AppPopoverService } from 'src/app/shared/app-popover/app-popover.service';
import { PostService } from 'src/app/shared_modules/posts/services/post/post.service';
import { Post } from 'src/app/models/social/post';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  popoverPosition: ConnectionPositionPair;
  searchData: SearchOptions = {
    filterOptions: [
      { text: 'All', selected: true }, { text: 'Recent' }, { text: 'Fellows' }, { text: 'Following' }
    ],
  };
  posts: Post[];
  constructor(
    private popoverService: AppPopoverService,
    private postService: PostService
  ) { }
  ngOnInit() {
    this.popoverPosition = this.popoverService.getTopRightPosition();
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }
  handleSearchInput($event) {

  }


}
