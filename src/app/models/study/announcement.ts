import { Student } from './student';
import { Time } from '@angular/common';

export class Announcement {
    id: number;
    text: string;
    date: Date;
    time: Time;
    announcer: Student;
}

