import { Component, OnInit } from '@angular/core';
import { ProvideReviewDialogService } from 'src/app/shared/reviews/provide-review-dialog/provide-review-dialog.service';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  rating = 5;
  constructor(
    private provideReviewDialog: ProvideReviewDialogService
  ) { }

  ngOnInit() {
  }

  handleRating(rating) {
    this.rating = rating;
  }
  provideReview() {
    this.provideReviewDialog.open();
  }

}
