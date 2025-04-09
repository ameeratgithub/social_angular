import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/study/book';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  @Input() books: Book[];
  constructor() { }

  ngOnInit() {
  }

}
