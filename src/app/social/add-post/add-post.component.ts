import { Component, OnInit } from '@angular/core';
import { OriginConnectionPosition, OverlayConnectionPosition, ConnectionPositionPair } from '@angular/cdk/overlay';
import { Image } from 'src/app/shared/services/media/image';
import { Video } from 'src/app/shared/services/media/video';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  isInputEmpty = true;
  shouldButtonDisabled = true;
  images: Image[] | Video[] = [];

  private originPos: OriginConnectionPosition = {
    originX: 'start',
    originY: 'bottom'
};
  private overlayPos: OverlayConnectionPosition = {
    overlayX: 'start',
    overlayY: 'top'
  };
  popoverPosition = new ConnectionPositionPair(this.originPos, this.overlayPos, 0, 5);

  constructor(
  ) { }
  save(content) {
    console.log(content);
  }
  ngOnInit() {
  }
  toggleButton() {
    this.shouldButtonDisabled = this.isInputEmpty && this.images.length < 1;
  }
  handleMedia(images: FileList) {
    for (let i = 0; i < images.length; i++) {
      this.images.push(this.transformToMedia(images[i]));
    }
    this.toggleButton();
  }
  removeMedia(image: Image) {
    this.images = this.images.filter(v => v.fileName !== image.fileName);
    this.toggleButton();
  }
  transformToMedia(file: File): Image {
    const image = new Image();
    image.fileName = file.name;
    return image;
  }



}
