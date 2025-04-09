import { Component, OnInit, Inject } from '@angular/core';
import { AppOverlayService, PORTAL_DATA } from 'src/app/shared/services/app-overlay/app-overlay.service';


@Component({
  selector: 'post-item-popup',
  templateUrl: './post-item-popup.component.html',
  styleUrls: ['./post-item-popup.component.scss']
})
export class PostItemPopupComponent implements OnInit {

  constructor(@Inject(PORTAL_DATA) public post, private appOverlayService: AppOverlayService
  ) { }

  ngOnInit() {
  }

}
