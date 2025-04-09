import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Media } from '../services/media/media';

@Component({
  selector: 'media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss']
})
export class MediaGalleryComponent implements OnInit {
  @Input() list: Media[];
  currentMedia: Media;
  @Input() currentIndex: number;
  media: any;
  constructor() {
  }
  ngOnInit() {
    this.currentIndex = this.currentIndex || 0;
    this.changeMedia(this.currentIndex);
  }
  changeMedia(index: number) {
    this.currentIndex = index;
    this.currentMedia = this.list[this.currentIndex];
  }
  goBack() {
    if ((this.currentIndex + 1) > 1) {
      this.changeMedia(this.currentIndex - 1);
    }
  }
  goForward() {
    if ((this.currentIndex + 1) < this.list.length) {
      this.changeMedia(this.currentIndex + 1);
    }
  }

}
