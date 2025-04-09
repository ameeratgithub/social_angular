import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/social/post';
import { IMediaThumbnail, MediaThumbnailService } from 'src/app/shared/media/media-thumbnail/media-thumbnail.service';


@Component({
  selector: 'images-list-item',
  templateUrl: './images-list-item.component.html',
  styleUrls: ['./images-list-item.component.scss']
})
export class ImagesListItemComponent implements OnInit {

  @Input() post: Post;
  thumbnail: IMediaThumbnail;
  constructor(
    private thumbnailService: MediaThumbnailService
  ) {
  }

  ngOnInit() {
    this.thumbnail = this.thumbnailService.getThumbnail(this.post);
  }


}
