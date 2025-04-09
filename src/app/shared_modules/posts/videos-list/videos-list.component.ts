import { Component, OnInit } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { SearchOptions } from 'src/app/shared/component-search/component-search.component';
import { AppPopoverService } from 'src/app/shared/app-popover/app-popover.service';
import { Post } from 'src/app/models/social/post';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {
  popoverPosition: ConnectionPositionPair;
  videoPosts: Post[];
  searchData: SearchOptions = {
    filterOptions: [
      { text: 'All', selected: true }, { text: 'Recent' }, { text: 'Fellows' }, { text: 'Following' }
    ]
  };
  constructor(
    private popoverService: AppPopoverService,
    private postService: PostService
  ) {
  }
  ngOnInit() {
    this.popoverPosition = this.popoverService.getTopRightPosition();
    this.postService.getVideoPosts().subscribe(videoPosts => this.videoPosts = videoPosts);
  }
  handleSearchInput($event) {
  }
}
