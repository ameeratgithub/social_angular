import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-registration-fields',
  templateUrl: './course-registration-fields.component.html',
  styleUrls: ['./course-registration-fields.component.scss']
})
export class CourseRegistrationFieldsComponent implements OnInit {

  @Input() number: number;
  @Output() removed = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  remove(number) {
    this.removed.emit(number);
  }

}
