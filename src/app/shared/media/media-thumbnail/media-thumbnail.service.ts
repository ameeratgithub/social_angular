import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/social/post';
import { Media } from '../../services/media/media';

export interface IMediaThumbnail {
  type: string;
  url: string
}
@Injectable({
  providedIn: 'root'
})
export class MediaThumbnailService {

  constructor() { }
  getThumbnail(p: Post): IMediaThumbnail {
    return {
      type: this.getMediaType(p),
      url: this.getThumbnailUrl(p)
    } as IMediaThumbnail;
  }
  private getMediaType(p: Post): string {
    return p.album ? 'album' : p.media.type;
  }
  private getThumbnailUrl(p: Post): string {
    return p.album ? this.getMediaThumbnail(p.album.items[0]) : this.getMediaThumbnail(p.media);
  }
  private getMediaThumbnail(m: Media): string {
    return m.type === 'video' ? m.cover : m.url;
  }
}
