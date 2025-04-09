import { Semester } from './semester';
import { Announcement } from './announcement';
import { SectionFile } from './section-file';
import { Student } from './student';

export class Section {
    id: number;
    name: string;
    datesheet?: SectionFile;
    timetable?: SectionFile;
    semesters?: Semester[];
    announcements?: Announcement[];
    cr?: Student;
    gr?: Student;
    currentSemester?: Semester;
    members?: Student[];
}

