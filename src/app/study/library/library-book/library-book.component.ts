import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/study/book';
import { BookService } from '../../services/library/book.service';
import { LibraryDialogService } from '../library-dialog/library-dialog.service';
import { ComponentLoaderService } from 'src/app/shared/component-loader/component-loader.service';
import { ProvideReviewDialogService } from 'src/app/shared/reviews/provide-review-dialog/provide-review-dialog.service';

@Component({
  selector: 'library-book',
  templateUrl: './library-book.component.html',
  styleUrls: ['./library-book.component.scss']
})
export class LibraryBookComponent implements OnInit {
  rating = 5;
  book: Book;
  loading: boolean;
  constructor(
    private bookService: BookService,
    private libaryDialogService: LibraryDialogService,
    public loaderService: ComponentLoaderService,
    private provideReviewDialog: ProvideReviewDialogService
  ) { }

  ngOnInit() {
    this.getBook();
  }
  getBook() {
    this.loaderService.loader(this.bookService.getBookDetail(), res => {
      this.book = res;
    });
  }
  provideReview() {
    this.provideReviewDialog.open();
  }
  openDialog() {
    const dialogRef = this.libaryDialogService.open();
    const instance = dialogRef.componentInstance;
    instance.header = 'Edit book';
    instance.book = this.book;
  }

}
