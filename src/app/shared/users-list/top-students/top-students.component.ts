import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/study/student';
import { StudentService } from 'src/app/study/services/student/student.service';
import { ComponentLoaderService } from '../../component-loader/component-loader.service';
import { GradeBadge } from 'src/app/models/study/grade-badge';

@Component({
  selector: 'top-students',
  templateUrl: './top-students.component.html',
  styleUrls: ['./top-students.component.scss']
})
export class TopStudentsComponent implements OnInit {

  students: Student[];
  constructor(private studentService: StudentService, public loaderService: ComponentLoaderService) {
  }

  ngOnInit() {
    this.loaderService.loader(this.studentService.getTopStudents(), res => {
      this.students = res;
    });
  }
  getBadgeClass(badge: GradeBadge) {
      return 't-' + badge.name.toLowerCase();
  }

}
