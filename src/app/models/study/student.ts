import { User } from 'src/app/models/user/user';
import { GradeBadge } from './grade-badge';

export class Student extends User {
    CGPA?: number;
    rollNumber: string;
    isLeader?: boolean;
    isCR?: boolean;
    isGR?: boolean;
    isCourseGroupMember?: boolean;
    gradeBadge?: GradeBadge;
    isUniversityTopper?: boolean;
    isCampusTopper?: boolean;
    isDepartmentTopper?: boolean;
    isClassTopper?: boolean;
}
