import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course-input-dialog',
  templateUrl: './course-input-dialog.component.html',
  styleUrls: ['./course-input-dialog.component.scss']
})
export class CourseInputDialogComponent implements OnInit {
  @Input() header: string;
  constructor() { }

  ngOnInit() {
  }

}
