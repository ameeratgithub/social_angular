import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppDialogService } from '../../dialogs/app-dialog/app-dialog.service';
import { ReviewsDialogComponent } from '../../reviews/reviews-dialog/reviews-dialog.component';


@Component({
  selector: 'display-rating',
  templateUrl: './display-rating.component.html',
  styleUrls: ['./display-rating.component.scss']
})
export class DisplayRatingComponent implements OnInit {

  @Input() rating: number;
  @Input() private starCount = 5;
  @Input() private color: string;

  totalStars: number[];
  ratingArr = [];

  constructor(private modalService: AppDialogService) {
    this.totalStars = Array(this.starCount).fill(5);
  }

  ngOnInit() {
  }
  getStarsWidth() {
    return (this.rating / this.starCount) * 100;
  }
  openReviewsDialog() {
    this.modalService.openDialog(ReviewsDialogComponent, { position: { top: '2%' } });
  }
  getStarColor() {
    return this.color || 't-orange-l2';
  }
}
