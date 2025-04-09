import { Injectable } from '@angular/core';
import { LibraryService } from './library.service';
import { map } from 'rxjs/operators';
import { Book } from '../../../models/study/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private libraryService: LibraryService
  ) { }
  getBookDetail(): Observable<Book> {
    return this.libraryService.getLibrary().pipe(
      map(res => res.books[0] as Book)
    );
  }
}
