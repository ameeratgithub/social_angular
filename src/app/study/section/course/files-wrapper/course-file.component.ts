import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseFile } from 'src/app/models/study/course-file';

@Component({
  selector: 'course-file',
  templateUrl: './course-file.component.html',
  styleUrls: ['./course-file.component.scss']
})
export class CourseFileComponent implements OnInit {
  @Input() file: CourseFile;
  @Output() update = new EventEmitter();
  @Output() remove = new EventEmitter();
  menuOpened = false;
  constructor() { }
  ngOnInit() {
  }
  updateClicked() {
    this.update.emit();
  }
  removeClicked() {
    this.remove.emit();
  }
}
