import { Student } from './student';

export class CourseFile {
    id: number;
    name: string;
    size: number;
    type: string;
    uploader: Student;
    url: string;
    date: Date | number;
    deadline: Date | number;
}
