import { CampusTiming } from './campus-timing';

export class Campus {
    id: number;
    name: string;
    abbreviation?: string;
    timings?: CampusTiming[];
}
