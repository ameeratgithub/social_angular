import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../services/media/image';

@Component({
  selector: 'media-thumbnail',
  templateUrl: './media-thumbnail.component.html',
  styleUrls: ['./media-thumbnail.component.scss']
})
export class MediaThumbnailComponent implements OnInit {
  @Input() image: Image;
  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

}
