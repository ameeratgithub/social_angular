import { Injectable } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Observable } from 'rxjs';
import { Student } from '../../../models/study/student';
import { map, take } from 'rxjs/operators';
import { GradeBadge } from '../../../models/study/grade-badge';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private userService: UserService) { }
  getTopStudents(): Observable<Student[]> {
    return this.userService.getAll().pipe(
      map((res: Student[]) => {
        res[0].rollNumber = '13014198-023';
        res[0].CGPA = 3.59;
        res[0].isUniversityTopper = true;
        res[0].gradeBadge = this.getGradeBadge(res[0]);

        res[1].rollNumber = '13014198-016';
        res[1].CGPA = 3.58;
        res[1].isCampusTopper = true;
        res[1].gradeBadge = this.getGradeBadge(res[1]);

        res[2].rollNumber = '13014198-038';
        res[2].CGPA = 3.57;
        res[2].isClassTopper = true;
        res[2].gradeBadge = this.getGradeBadge(res[2]);
        res = res.slice(0, 3);
        return res as Student[];
      })
    );
  }
  getGradeBadge(s: Student): GradeBadge {
    if (s.isUniversityTopper) {
      return { name: 'Diamond', description: 'Diamond Badge: Student is university topper' };
    }
    if (s.isCampusTopper) {
      return { name: 'Gold', description: 'Gold Badge: Student is campus topper' };
    }
    if (s.isDepartmentTopper) {
      return { name: 'Silver', description: 'Silver Badge: Student is department topper' };
    }
    if (s.isClassTopper) {
      return { name: 'Bronze', description: 'Bronze Badge: Student is class topper' };
    }
    return null;
  }
}
