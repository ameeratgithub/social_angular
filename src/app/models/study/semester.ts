import { SemesterCourse } from './semester-course';

export class Semester {
    id: number;
    number: number;
    courses?: SemesterCourse[];
}
