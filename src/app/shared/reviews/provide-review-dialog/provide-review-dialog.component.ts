import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'provide-review-dialog',
  templateUrl: './provide-review-dialog.component.html',
  styleUrls: ['./provide-review-dialog.component.scss']
})
export class ProvideReviewDialogComponent implements OnInit {
  ratingArr = [];
  private rating: number;
  constructor() { }

  ngOnInit() {
    this.ratingArr = Array(5).fill(5);
  }
  onClick(rating: number) {
    this.rating = rating;
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
