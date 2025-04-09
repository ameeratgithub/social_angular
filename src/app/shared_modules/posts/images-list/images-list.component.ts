import { Component, OnInit } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { SearchOptions } from 'src/app/shared/component-search/component-search.component';
import { AppPopoverService } from 'src/app/shared/app-popover/app-popover.service';
import { AppOverlayService } from 'src/app/shared/services/app-overlay/app-overlay.service';
import { PostItemPopupComponent } from 'src/app/shared_modules/posts/post-item-popup/post-item-popup.component';
import { PostService } from 'src/app/shared_modules/posts/services/post/post.service';
import { Post } from 'src/app/models/social/post';

@Component({
  selector: 'images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {

  popoverPosition: ConnectionPositionPair;
  searchData: SearchOptions = {
    filterOptions: [
      { text: 'All', selected: true }, { text: 'Recent' }, { text: 'Fellows' }, { text: 'Following' }
    ]
  };
  imagePosts: Post[];
  constructor(
    private popoverService: AppPopoverService,
    private appOverlayService: AppOverlayService,
    private postService: PostService
  ) {
  }
  ngOnInit() {
    this.popoverPosition = this.popoverService.getTopRightPosition();
    this.postService.getImagePosts().subscribe(imagePosts => this.imagePosts = imagePosts);
  }
  openPostPopup(p: Post) {
    this.appOverlayService.open(PostItemPopupComponent, p);
  }
  handleSearchInput($event){

  }
}
