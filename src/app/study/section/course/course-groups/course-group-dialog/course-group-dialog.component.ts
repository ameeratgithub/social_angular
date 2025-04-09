import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Student } from 'src/app/models/study/student';

@Component({
  selector: 'course-group-dialog',
  templateUrl: './course-group-dialog.component.html',
  styleUrls: ['./course-group-dialog.component.scss']
})
export class CourseGroupDialogComponent implements OnInit {

  buttons = { yes: 'Invite'};
  loading: boolean;
  @Input() action: string;
  students: Student[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().subscribe((res) => {
      this.loading = false;
      this.students = res as Student[];
    });
  }

}
