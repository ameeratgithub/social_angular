import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.scss']
})
export class CourseRegistrationComponent implements OnInit {

  totalCourses: number[] = [1];
  constructor(private _location: Location) { }

  ngOnInit() {
  }
  addCourse() {
    this.totalCourses.push(Math.max(...this.totalCourses) + 1);
  }
  removeClass(number) {
    if (this.totalCourses.length > 1) {
      this.totalCourses = this.totalCourses.filter(n => n !== number);
    }
  }
  goBack() {
    this._location.back();
  }
  

}
