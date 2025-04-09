import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/study/book';
import { ProvideReviewDialogService } from 'src/app/shared/reviews/provide-review-dialog/provide-review-dialog.service';

@Component({
  selector: 'books-list-item',
  templateUrl: './books-list-item.component.html',
  styleUrls: ['./books-list-item.component.scss']
})
export class BooksListItemComponent implements OnInit {

  @Input() book: Book;
  constructor(
    private provideReviewDialog: ProvideReviewDialogService
  ) { }

  ngOnInit() {
  }
  provideReview() {
    this.provideReviewDialog.open();
  }

}
