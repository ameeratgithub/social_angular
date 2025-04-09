import { Component, OnInit, Input } from '@angular/core';
import { AppOverlayService } from 'src/app/shared/services/app-overlay/app-overlay.service';
import { PostItemPopupComponent } from '../../post-item-popup/post-item-popup.component';
import { Post } from 'src/app/models/social/post';
import { MediaThumbnailService, IMediaThumbnail } from 'src/app/shared/media/media-thumbnail/media-thumbnail.service';

@Component({
  selector: 'posts-list-item',
  templateUrl: './posts-list-item.component.html',
  styleUrls: ['./posts-list-item.component.scss']
})
export class PostsListItemComponent implements OnInit {

  @Input() post: Post;
  thumbnail: IMediaThumbnail;
  constructor(
    private appOverlayService: AppOverlayService,
    private thumbnailService: MediaThumbnailService
  ) {
  }

  ngOnInit() {
    if (this.post.hasMedia) {
      this.thumbnail = this.thumbnailService.getThumbnail(this.post);
    }
  }
  openPostPopup() {
    this.appOverlayService.open(PostItemPopupComponent, this.post);
  }

}
