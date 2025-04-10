import { Component, OnInit } from '@angular/core';
import { Semester } from 'src/app/models/study/semester';

@Component({
  selector: 'semester-select-field',
  templateUrl: './semester-select-field.component.html',
  styleUrls: ['./semester-select-field.component.scss']
})
export class SemesterSelectFieldComponent implements OnInit {
  semesters: Semester[] = [
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
    { id: 5, number: 5 },
    { id: 6, number: 6 },
    { id: 7, number: 7 },
    { id: 8, number: 8 },
    { id: 9, number: 9 },
    { id: 10, number: 10 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
