import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/social/post';
import { IMediaThumbnail, MediaThumbnailService } from 'src/app/shared/media/media-thumbnail/media-thumbnail.service';
import { AppOverlayService } from 'src/app/shared/services/app-overlay/app-overlay.service';
import { PostItemPopupComponent } from '../../post-item-popup/post-item-popup.component';

@Component({
  selector: 'videos-list-item',
  templateUrl: './videos-list-item.component.html',
  styleUrls: ['./videos-list-item.component.scss']
})
export class VideosListItemComponent implements OnInit {

  @Input() post:Post;
  thumbnail: IMediaThumbnail;
  constructor(
    private thumbnailService: MediaThumbnailService,
    private appOverlayService: AppOverlayService
  ) {
  }

  ngOnInit() {
    this.thumbnail = this.thumbnailService.getThumbnail(this.post);
  }
  openPostPopup() {
    this.appOverlayService.open(PostItemPopupComponent, this.post);
  }

}
