import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../models/study/book';

@Component({
  selector: 'library-dialog',
  templateUrl: './library-dialog.component.html',
  styleUrls: ['./library-dialog.component.scss']
})
export class LibraryDialogComponent implements OnInit {

  @Input() header: string;
  @Input() loading: boolean;
  @Input() book: Book;
  categories = [
    'Accounting & Finance',
    'Art & Design',
    'Business & Management Studies',
    'Computer Science & Information System',
    'Economics & Econometrics',
    'Engineering & Technology',
    'Humanities',
    'Law',
    'Literature',
    'Medicine',
    'Social Sciences & Management',
    'Web Development',
  ];
  constructor() { }

  ngOnInit() {
  }
  save($event) {

  }
}
