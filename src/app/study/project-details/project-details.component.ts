import {
  Component
} from '@angular/core';


import { AppOverlayService } from 'src/app/shared/services/app-overlay/app-overlay.service';
import { MediaGalleryPopupComponent } from 'src/app/shared/media-gallery/media-gallery-popup/media-gallery-popup.component';
import { ProvideReviewDialogService } from 'src/app/shared/reviews/provide-review-dialog/provide-review-dialog.service';
import { ProjectDialogService } from '../project-dialog/project-dialog.service';
import { Media } from 'src/app/shared/services/media/media';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})

export class ProjectDetailsComponent {

  rating = 5;
  currentIndex: number;
  imagesList: Media[] = [
    { id: '1', type: 'image', url: 'assets/images/img-1.jpg' },
    { id: '2', type: 'image', url: 'assets/images/img-2.jpg' },
    { id: '3', type: 'image', url: 'assets/images/img-3.jpg' },
    { id: '4', type: 'image', url: 'assets/images/img-4.jpg' },
    { id: '5', type: 'image', url: 'assets/images/img-5.jpg' },
    { id: '6', type: 'image', url: 'assets/images/img-6.jpg' },
    { id: '7', type: 'image', url: 'assets/images/img-7.jpg' },
    { id: '8', type: 'image', url: 'assets/images/img-8.jpg' },
    { id: '9', type: 'image', url: 'assets/images/fb-1.jpg' },
    { id: '10', type: 'image', url: 'assets/images/fb-2.jpg' }
  ];
  videosList: Media[] = [
    { id: '1', type: 'video', cover: 'assets/images/img-1.jpg', url: 'assets/videos/v-1.mp4' },
    { id: '2', type: 'video', cover: 'assets/images/img-2.jpg', url: 'assets/videos/v-2.mp4' },
    { id: '3', type: 'video', cover: 'assets/images/img-3.jpg', url: 'assets/videos/v-3.mp4' },
    { id: '4', type: 'video', cover: 'assets/images/img-4.jpg', url: 'assets/videos/v-4.mp4' },
    { id: '5', type: 'video', cover: 'assets/images/img-5.jpg', url: 'assets/videos/v-5.mp4' },
    { id: '6', type: 'video', cover: 'assets/images/img-6.jpg', url: 'assets/videos/v-1.mp4' },
    { id: '7', type: 'video', cover: 'assets/images/img-7.jpg', url: 'assets/videos/v-2.mp4' },
    { id: '8', type: 'video', cover: 'assets/images/img-8.jpg', url: 'assets/videos/v-3.mp4' },
    { id: '9', type: 'video', cover: 'assets/images/fb-1.jpg', url: 'assets/videos/v-4.mp4' },
    { id: '10', type: 'video', cover: 'assets/images/fb-2.jpg', url: 'assets/videos/v-5.mp4' }
  ]
  constructor(
    private appOverlayService: AppOverlayService,
    private provideReviewDialog: ProvideReviewDialogService,
    private projectDialog: ProjectDialogService
  ) { }

  openGalleryPopup(list: Media[], i: number) {
    this.currentIndex = i;
    this.appOverlayService.open(MediaGalleryPopupComponent,
      { currentIndex: this.currentIndex, list: list }
    );
  }
  openImages(i: number) {
    this.openGalleryPopup(this.imagesList, i);
  }
  openVideos(i: number) {
    this.openGalleryPopup(this.videosList, i);
  }
  provideReview() {
    this.provideReviewDialog.open();
  }
  openProjectDialog() {
    this.projectDialog.open();
  }

}
