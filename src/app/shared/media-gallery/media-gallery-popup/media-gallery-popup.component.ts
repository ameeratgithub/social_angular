import { Component, Inject } from '@angular/core';
import { AppOverlayService, PORTAL_DATA } from '../../services/app-overlay/app-overlay.service';



@Component({
  selector: 'media-gallery-popup',
  templateUrl: './media-gallery-popup.component.html',
  styleUrls: ['./media-gallery-popup.component.scss']
})
export class MediaGalleryPopupComponent {
  constructor(@Inject(PORTAL_DATA) public media, private appOverlayService: AppOverlayService) {
  }
  closeGalleryPopup() {
    this.appOverlayService.close();
  }
}
