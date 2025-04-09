import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/study/services/library/library.service';
import { Book } from 'src/app/models/study/book';

@Component({
  selector: 'profile-books',
  templateUrl: './profile-books.component.html',
  styleUrls: ['./profile-books.component.scss']
})
export class ProfileBooksComponent implements OnInit {

  books: Book[];
  constructor(
    private libraryService: LibraryService
  ) {
  }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.libraryService.getLibrary().subscribe(library => {
      this.books = library.books;
    }
    );
  }

}
